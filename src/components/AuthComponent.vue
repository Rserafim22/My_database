<!-- src/components/AuthComponent.vue -->
<template>
  <div class="auth">
    <h2>Authentification</h2>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <form @submit.prevent="isLoginMode ? login() : register()">
      <div>
        <input type="email" v-model="email" placeholder="Email" required />
      </div>
      <div>
        <input type="password" v-model="password" placeholder="Mot de passe" required />
      </div>
      <button type="submit">{{ isLoginMode ? 'Se connecter' : 'S\'inscrire' }}</button>
    </form>

    <p>Ou</p>
    <button @click="loginWithGoogle">Se connecter avec Google</button>

    <p>
      {{ isLoginMode ? 'Pas encore de compte ?' : 'Déjà inscrit ?' }}
      <button @click="toggleMode">{{ isLoginMode ? 'S\'inscrire' : 'Se connecter' }}</button>
    </p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default {
  name: 'AuthComponent',
  setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const isLoginMode = ref(true); // Mode de formulaire : Connexion ou Inscription

    // Fonction de connexion de l'utilisateur
    const login = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log('Connecté avec succès!');
        errorMessage.value = '';
      } catch (error) {
        errorMessage.value = 'Erreur lors de la connexion : ' + error.message;
      }
    };

    // Fonction d'inscription de l'utilisateur
    const register = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        console.log('Compte créé et connecté avec succès!');
        errorMessage.value = '';
      } catch (error) {
        errorMessage.value = 'Erreur lors de l\'inscription : ' + error.message;
      }
    };

    // Fonction de connexion avec Google
    const loginWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        console.log('Connecté avec Google!');
        errorMessage.value = '';
      } catch (error) {
        errorMessage.value = 'Erreur lors de la connexion avec Google : ' + error.message;
      }
    };

    // Bascule entre les modes Connexion et Inscription
    const toggleMode = () => {
      isLoginMode.value = !isLoginMode.value;
      errorMessage.value = ''; // Réinitialise les erreurs lorsque le mode change
    };

    return { email, password, login, register, loginWithGoogle, errorMessage, isLoginMode, toggleMode };
  },
};
</script>

<style scoped>
.auth {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
}

input {
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0;
  font-size: 1rem;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
}

.error {
  color: red;
  font-size: 0.9rem;
  margin-bottom: 10px;
}
</style>
