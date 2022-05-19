<template>
  <Navigation @filter="filter" :visits="visits" />
  <div class="visitblock-container">
    <div v-for="visit in visits" :key="visit.id">
      <VisitBlock :visit="visit" @deleteVisit="deleteVisitFunc" />
    </div>
  </div>

  <router-link class="btn left-top-pos" to="/auth">Wyloguj</router-link>
</template>

<script>
import VisitBlock from "../components/VisitBlock.vue";
import Navigation from "../components/Navigation.vue";
import { mapGetters, mapActions,mapState } from "vuex";

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
      visits: [],
    };
  },
 

  methods: {
    ...mapActions(["fetchAllVisits", "deleteVisit"]),
    filter(operator) {
      let today = new Date();
      switch (operator) {
        case "today":
          this.chosenFilter = "today";

          this.visits = this.allVisits
            .filter((x) => x.fromUserId === this.user.id)
            .filter((x) => {
              return today.toDateString() < new Date(x.date).toDateString();
            });

          break;
        case "history":
          this.chosenFilter = "history";

          this.visits = this.allVisits
            .filter((x) => x.fromUserId === this.user.id)
            .filter((x) => {
              return today > new Date(x.date);
            });

          break;

        case "all": {
          this.visits = this.allVisits
            .filter((x) => x.fromUserId === this.user.id)
            .filter((x) => {
              return today < new Date(x.date);
            });
        }
        default:
          break;
      }
    },
    deleteVisitFunc(id) {
       console.log(id, 'lol')
       this.deleteVisit(id)
      
       this.visits = this.visits.filter(x =>  x.id !== id )
  
    }
  },
  async created() {
    let today = new Date();
    console.log("is this working");
    let res = await this.fetchAllVisits();
    this.visits = this.allVisits
      .filter((x) => x.fromUserId === this.user.id)
      .filter((x) => {
        return today < new Date(x.date);
      });
  },
  computed: mapGetters(["allVisits", "user"]),
};
</script>

<style scoped></style>
