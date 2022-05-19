<template>
  <div class="input-container input-container-register">
    <h1 class="main-title">Dodaj Wizytę</h1>
    <form @submit="onSubmit">
      <input
        type="text"
        v-model="name"
        placeholder="Imie klienta"
        className="basic-input"
      />
      <input
        type="text"
        placeholder="Nazwisko klienta"
        className="basic-input"
        v-model="surname"
      />
      <input
        type="number"
        placeholder="Telefon klienta"
        className="basic-input"
        v-model="phone"
      />
      <input
        type="date"
        v-model="date"
        placeholder="Data wizyty"
        className="basic-input"
      />
      <input
        type="time"
        v-model="time"
        placeholder="Godzina wizyty"
        className="basic-input"
      />
      <input
        type="text"
        v-model="description"
        placeholder="Opis wizyty"
        className="basic-input"
      />
      <input
        type="text"
        v-model="location"
        placeholder="Miejsce wizyty"
        className="basic-input"
      />
      <input type="submit" value="Dodaj Wizytę" class="btn" />
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      name: "",
      surname: "",
      phone: "",
      date: "",
      time: "",
      descrption: "",
      location: "",
    };
  },
  computed: mapGetters(["user"]),
  methods: {
    ...mapActions(["addVisit"]),
    onSubmit(e) {
      e.preventDefault();

      let newVisit = {
        name: this.name,
        surname: this.surname,
        phone: this.phone,
        date: this.date,
        time: this.time,
        description: this.description,
        location: this.location,
      };

      if (Object.values(newVisit).some((x) => x === "")) {
        alert("No input can be empty");
        return;
      }

      let additionalData = {
        status: "secondary",
        status_description: "W oczekiwaniu",
        id: Math.floor(Math.random() * 100000),
        icon: "fa-question-circle",
      };

      newVisit = { ...newVisit, ...additionalData, fromUserId : this.user.id };
     

      console.log(newVisit);
    
      this.addVisit(newVisit);
     
    },
  },
};
</script>
