<template>
  <div class="input-container">
    <i class="fa-solid fa-calendar-days main-icon"></i>
    <h1 class="main-title">Twoje Wizyty i Spotkania</h1>
    <input type="email" placeholder="Login" className="basic-input" />
    <input type="password" placeholder="Hasło" className="basic-input" />
    <h4 @click="goToRegister()" class="text-white cursor-pointer">Nie masz konta? Zarejestruj się!</h4>
    <router-link class="btn" to="/">Zaloguj</router-link>
  </div>
</template>

<script>
export default {
  methods : {
    goToRegister() {
       this.$router.push('/register'); 
    }
  }
}
</script>