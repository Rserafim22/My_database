<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/login" v-if="!user">Connexion</router-link>
      <router-link to="/profile" v-if="user">Mon Profil</router-link>
      <button @click="logout" v-if="user">Déconnexion</button>
    </nav>

    <router-view />
  </div>
</template>

<script>
import { ref } from 'vue';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default {
  name: 'App',
  setup() {
    const user = ref(null);

    onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser;
    });

    const logout = async () => {
      await signOut(auth);
      user.value = null;
    };

    return {
      user,
      logout
    };
  }
};
</script>

<style>
/* Styles de base */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  margin-bottom: 20px;
}

button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
