<template>
  <Navigation />
  <div class="visitblock-container">
    <div v-for="visit in visits" :key="visit.id">
      <VisitBlock :visit="visit" />
  </div>
   
  </div>

  <router-link class="btn left-top-pos" to="/auth">Wyloguj</router-link>
</template>

<script>
import VisitBlock from "../components/VisitBlock.vue";
import Navigation from "../components/Navigation.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    VisitBlock,
    Navigation,
  },
  props: {
    showAddTask: Boolean,
  },
  data() {
    return {
      visits : []
    }
  },
  methods: {
    ...mapActions(["fetchAllVisits"]),
  },
  async created() {
     let res = await this.fetchAllVisits();
     this.visits = this.allVisits
  },
  computed: mapGetters(["allVisits"]),
};
</script>

<style scoped></style>
