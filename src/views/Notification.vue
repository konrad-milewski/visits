<template>
  <VisitBlock :visit="visit" isFromNotification="{{true}}" />
  <h1 class="text-white ">
    Przypomnienie o spotkaniu z {{ user.name }} {{ user.surname }}
  </h1>
  <h2 class="text-white">Czy potwierdzasz to spotkanie?</h2>
  <i
    @click="updateVisitFunction('ok')"
    class="fa-solid fa-circle-check text-white icon-notification-one fa-7x cursor-pointer"
  ></i>
  <i
    @click="updateVisitFunction('decline')"
    class="fa-solid fa-circle-xmark text-white icon-notification-two fa-7x cursor-pointer"
  ></i>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VisitBlock from "../components/VisitBlock.vue";

export default {
  components: {
    VisitBlock,
  },
  data() {
    return {
      visit: {},
    };
  },
  methods: {
    ...mapActions(["updateVisit"]),
    updateVisitFunction(operator) {
      switch (operator) {
        case "ok":
          this.updateVisit({
            ...this.visit,
            status: "success",
            status_description: "Spotkanie potwierdzone",
            icon: " fa-circle-check",
          });
          break;
        case "decline":
          this.updateVisit({
            ...this.visit,
            status: "danger",
            status_description: "Spotkanie zostało odrzucone",
            icon: " fa-circle-xmark",
          });
          break;
          case 'send': {
               this.updateVisit({
            ...this.visit,
            status: "secondary",
            status_description: "Wysłano powiadomienie",
            icon: " fa-question-circle",
          });
          }
        default:
          break;
      }
    },
  },
  computed: mapGetters(["allVisits", "user"]),
  created() {
    this.visit = this.allVisits.find(
      (x) => Number(x.id) === Number(this.$route.params.id)
    );
    if (this.visit.status === "secondary") {
        this.updateVisitFunction('send')
      this.visit = {
        ...this.visit,
        status_description: "Wysłano powiadomienie",
      };
    }
  },
};
</script>
