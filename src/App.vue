<template>
  <div
    :class="[$route.path === '/' || $route.path === '/auth' ? 'd-none' : '']"
  >
    <i
      class="fa-solid fa-circle-chevron-left back-arrow"
      @click="$router.go(-1)"
      aria-hidden="true"
    ></i>
    <h3
      :class="[$route.path === '/register' ? 'd-none' : '', 'title-of-section']"
    >
      Twoje Wizyty
    </h3>
  </div>

  <div
    :class="[
      $route.path === '/auth' || $route.path === '/register' ? 'd-none' : '',
    ]"
  >
    <i class="fa-solid fa-circle-plus btn-add-visit" @click="goToAddVisit()">
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  computed: mapGetters(["user"]),
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
    ...mapActions(["fetchAllVisits"]),
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
      console.log(this.user);
    },
    goToAddVisit() {
      this.$router.push("/add-visit");
    },
   
  },
  created() {
     this.user.id === 'no_user' &&   this.$router.push("/auth");
  }
};
</script>
