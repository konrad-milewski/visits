<template>
  <div
    :class="[
      $route.path === '/' ||
      $route.path === '/auth' 
        ? 'd-none'
        : '',
    ]"
  >
    <i
      class="fa-solid fa-circle-chevron-left back-arrow"
      @click="$router.go(-1)"
      aria-hidden="true"
    ></i>
    <h3   :class="[
      $route.path === '/register' 
        ? 'd-none'
        : ''
    ,'title-of-section']">Twoje Wizyty</h3>
  </div>

  <div :class="[
      $route.path === '/auth' ||
      $route.path === '/register'
        ? 'd-none'
        : '',
    ]">
    <i  class="fa-solid fa-circle-plus btn-add-visit" @click="goToAddVisit()">
    </i>
    <!-- <h5 class="title-add-visit">Dodaj wizytę</h5> -->
  </div>

  <div
    @click="toggleAddTask"
    :class="[$route.path === '/auth' ? 'container' : 'white-container']"
  >
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";

import Footer from "./components/Footer.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  computed: mapGetters(["user"]),
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    goToAddVisit() {
      this.$router.push("/add-visit");
    },
  },
};
</script>
