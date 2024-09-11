<!-- src/views/ProfileView.vue -->
<template>
  <div class="profile">
    <h1>Mon Profil</h1>
    <div v-if="user">
      <!-- Affichage de la photo de profil -->
      <img v-if="photoURL" :src="photoURL" alt="Photo de profil" class="profile-pic" />
      <p><strong>Nom d'utilisateur :</strong> {{ displayName || 'Nom non défini' }}</p>
      <p><strong>Email :</strong> {{ user.email }}</p>
      
      <!-- Input pour télécharger une nouvelle photo de profil -->
      <input type="file" @change="uploadProfilePicture" />
      
      <button @click="updateProfile">Mettre à jour le profil</button>
      <button @click="logout">Déconnexion</button>
      
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
    <div v-else>
      <p>Vous devez être connecté pour voir cette page.</p>
      <router-link to="/login">Se connecter</router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { storage, db } from '../firebase'; // Importe Firebase Storage et Database
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref as dbRef, set } from 'firebase/database'; // Importe les fonctions nécessaires pour Realtime Database

export default {
  name: 'ProfileView',
  setup() {
    const user = ref(null);
    const displayName = ref('');
    const photoURL = ref('');
    const successMessage = ref('');
    const errorMessage = ref('');

    // Vérifie l'état de l'utilisateur connecté
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        user.value = currentUser;
        displayName.value = currentUser.displayName || '';
        photoURL.value = currentUser.photoURL || '';
      }
    });

    // Fonction pour télécharger une photo de profil
    const uploadProfilePicture = async (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const fileRef = storageRef(storage, `profilePictures/${user.value.uid}/${file.name}`); // Référence de stockage pour la photo de profil

      try {
        const snapshot = await uploadBytes(fileRef, file);
        const url = await getDownloadURL(snapshot.ref);
        photoURL.value = url;
        console.log('Photo de profil téléchargée avec succès:', url);
        successMessage.value = 'Photo de profil mise à jour avec succès !';
        
        // Enregistre l'URL de la photo de profil dans la Realtime Database
        const userRef = dbRef(db, `users/${user.value.uid}`);
        await set(userRef, { imageProfile: url });
        console.log('URL de la photo de profil ajoutée à la Realtime Database');
      } catch (error) {
        errorMessage.value = 'Erreur lors du téléchargement de la photo : ' + error.message;
        console.error('Erreur lors du téléchargement de la photo :', error);
      }
    };

    // Fonction pour mettre à jour le profil de l'utilisateur
    const updateProfileInfo = async () => {
      if (!user.value) return;

      try {
        await updateProfile(user.value, {
          displayName: displayName.value,
          photoURL: photoURL.value
        });
        successMessage.value = 'Profil mis à jour avec succès !';
        errorMessage.value = '';
      } catch (error) {
        errorMessage.value = 'Erreur lors de la mise à jour du profil : ' + error.message;
        successMessage.value = '';
        console.error('Erreur lors de la mise à jour du profil :', error);
      }
    };

    // Fonction de déconnexion
    const logout = async () => {
      try {
        await signOut(auth);
        console.log('Déconnecté avec succès!');
      } catch (error) {
        console.error('Erreur lors de la déconnexion:', error.message);
      }
    };

    return { user, displayName, photoURL, uploadProfilePicture, updateProfile: updateProfileInfo, logout, successMessage, errorMessage };
  },
};
</script>

<style scoped>
.profile {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

p {
  font-size: 1rem;
  margin: 10px 0;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
}

.success {
  color: green;
  font-size: 0.9rem;
  margin-top: 10px;
}

.error {
  color: red;
  font-size: 0.9rem;
  margin-top: 10px;
}
</style>
