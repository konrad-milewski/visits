<template>
  <div class="input-container">
    <i class="fa-solid fa-calendar-days main-icon"></i>
    <h1 class="main-title">Twoje Wizyty i Spotkania</h1>
     <form @submit="onSubmit">
      <input type="email" placeholder="Email" v-model="email" className="basic-input" />
    <input type="password" placeholder="Hasło" v-model="password" className="basic-input" />
 <h4 @click="goToRegister()" class="text-white cursor-pointer">
      Nie masz konta? Zarejestruj się!
    </h4>
     <input type="submit" value="Zaloguj się" class="btn" />
     </form>
   
   
   
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
  
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    onSubmit(e) {
      e.preventDefault();

      const userData = {
     
        email: this.email,
       password:this.password
      };

      if (Object.values(userData).some((x) => x === "")) {
        alert("No input can be empty");
        return;
      }

      
      this.login(userData);
    },
    goToRegister(){
      this.$route.push('/register')
    }
  
  },
};
</script>
