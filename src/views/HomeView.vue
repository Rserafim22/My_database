<!-- src/views/HomeView.vue -->
<template>
  <div class="home">
    <h1>Bienvenue sur notre réseau social</h1>
    <p v-if="!user">Veuillez vous connecter pour commencer à poster des messages.</p>

    <div v-if="user">
      <!-- Composant de publication de messages (seulement visible si l'utilisateur est connecté) -->
      <PostComponent />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import PostComponent from '../components/PostComponent.vue';

export default {
  name: 'HomeView',
  components: {
    PostComponent,
  },
  setup() {
    const user = ref(null);

    // Vérifie l'état d'authentification de l'utilisateur
    onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser;
    });

    return { user };
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 20px;
}

h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  color: #555;
}
</style>
