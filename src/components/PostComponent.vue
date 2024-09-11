<!-- src/components/PostComponent.vue -->
<template>
  <div class="post">
    <h2>Poster un message</h2>
    <form @submit.prevent="postMessage">
      <textarea v-model="message" placeholder="Écris ton message..." required></textarea>
      <button type="submit">Poster</button>
    </form>

    <h3>Messages</h3>
    <div v-if="messages.length === 0">
      <p>Aucun message pour le moment.</p>
    </div>
    <ul v-else>
      <li v-for="msg in messages" :key="msg.id" class="message-item">
        <img v-if="msg.imageProfile" :src="msg.imageProfile" alt="Image de profil" class="profile-image" />
        <p>{{ msg.content }}</p>
        <small>Posté le {{ new Date(msg.createdAt).toLocaleString() }}</small>
        <button @click="replyToMessage(msg.id)">Répondre</button>
        <!-- Affichage des réponses s'il y en a -->
        <ul v-if="msg.replies && msg.replies.length > 0">
          <li v-for="reply in msg.replies" :key="reply.id">
            <p>{{ reply.content }}</p>
            <small>Réponse le {{ new Date(reply.createdAt).toLocaleString() }}</small>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { db , auth } from '../firebase';
import { ref as dbRef, push, set, onValue, get } from 'firebase/database';

export default {
  name: 'PostComponent',
  setup() {
    const message = ref('');
    const messages = ref([]);

    // Fonction pour poster un message dans la Realtime Database
    const postMessage = async () => {
      if (message.value.trim() === '') return; // Vérifie que le message n'est pas vide

      const messagesRef = dbRef(db, 'messages');
      const newMessageRef = push(messagesRef);
      const userId = auth.currentUser.uid; // Assure que l'utilisateur est connecté
      await set(newMessageRef, {
        content: message.value,
        createdAt: Date.now(),
        userId: userId, // Associe l'ID utilisateur au message
        replies: [],
      });
      console.log('Message posté avec succès:', message.value);
      message.value = ''; // Réinitialise le champ du message après envoi
    };

    // Fonction pour charger les messages et leurs réponses en temps réel
    const loadMessages = async () => {
      const messagesRef = dbRef(db, 'messages');
      onValue(messagesRef, async (snapshot) => {
        const data = snapshot.val();
        const loadedMessages = data
          ? Object.entries(data).map(([id, content]) => ({ id, ...content }))
          : [];

        // Charger les réponses et les images de profil pour chaque message
        for (const msg of loadedMessages) {
          if (msg.userId) {
            const userRef = dbRef(db, `users/${msg.userId}`);
            const userSnapshot = await get(userRef);
            const userData = userSnapshot.val();
            msg.imageProfile = userData ? userData.imageProfile : ''; // Ajoute l'image de profil de l'utilisateur
          }

          if (msg.replies) {
            msg.replies = Object.entries(msg.replies).map(([id, reply]) => ({
              id,
              ...reply,
            }));
          } else {
            msg.replies = []; // Assure qu'il y a toujours un tableau de réponses
          }
        }

        messages.value = loadedMessages;
        console.log('Messages chargés:', messages.value);
      });
    };

    // Fonction pour répondre à un message
    const replyToMessage = (messageId) => {
      const reply = prompt('Écris ta réponse :');
      if (reply && reply.trim() !== '') {
        const messageRef = dbRef(db, `messages/${messageId}/replies`);
        const newReplyRef = push(messageRef);
        set(newReplyRef, {
          content: reply,
          createdAt: Date.now(),
        })
          .then(() => {
            console.log('Réponse postée avec succès:', reply);
          })
          .catch((error) => {
            console.error('Erreur lors de la réponse:', error);
          });
      }
    };

    onMounted(() => {
      loadMessages(); // Charge les messages et leurs réponses à l'initialisation du composant
    });

    return { message, messages, postMessage, replyToMessage };
  },
};
</script>

<style scoped>
.post {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.message-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}

h2, h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
}

textarea {
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0;
  font-size: 1rem;
  height: 80px;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

small {
  color: #888;
  display: block;
  margin-top: 5px;
}
</style>
