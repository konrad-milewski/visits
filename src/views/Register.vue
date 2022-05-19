<template>
  <div class="input-container input-container-register">
    <i class="fa-solid fa-calendar-days main-icon"></i>
    <h1 class="main-title">Twoje Wizyty i Spotkania</h1>
    <form @submit="onSubmit">
      <input
        type="name"
        placeholder="Imie"
        v-model="name"
        className="basic-input"
      />
      <input
        type="surname"
        placeholder="Nazwa"
        v-model="surname"
        className="basic-input"
      />
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        className="basic-input"
      />
      <input
        type="password"
        placeholder="Hasło"
        v-model="password"
        className="basic-input"
      />
      <input type="submit" value="Zarejestruj się" class="btn" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["registerUser"]),
    onSubmit(e) {
      e.preventDefault();

      const userData = {
        name: this.name,
        surname: this.surname,
        phone: this.phone,
        date: this.date,
        time: this.time,
      };

      if (Object.values(userData).some((x) => x === "")) {
        alert("No input can be empty");
        return;
      }

      userData.id = Math.floor(Math.random() * 100000);
      
      this.$router.push("/");
      this.registerUser(userData);
    },
  },
};
</script>
