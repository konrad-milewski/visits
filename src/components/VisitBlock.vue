<template>
  <div className="visit-block row" >
    <i
       v-show="!this.isFromNotification"
      class="fa-solid fa-trash visit-block-trash"
      @click="this.$emit('deleteVisit', visit.id)"
    ></i>

    <div class="column">
      <div className="visit-block-info">
        <i class="fa-solid fa-user text-primary"></i>
        <p class="text-primary">{{ visit.name }}</p>
      </div>
      <div className="visit-block-info">
        <i class="fa-solid fa-phone"></i>
        <p>{{ visit.phone }}</p>
      </div>

      <div className="visit-block-info">
        <i class="fa-solid fa-comment"></i>
        <p>{{ visit.description }}</p>
      </div>
      <div   v-show="!this.isFromNotification && this.visit.status === 'secondary'"  @click="this.$router.push(`/notification/${visit.id}`)" className="visit-block-info cursor-pointer ">
        <i class="fa-solid fa-paper-plane"></i>
        <p>Wyślij przypomnienie</p>
      </div>
    </div>
    <div class="column">
      <div className="visit-block-info">
        <i class="fa-solid fa-calendar"></i>
        <p>{{ visit.date }} {{ visit.time }}</p>
      </div>
      <div className="visit-block-info">
        <i class="fa-solid fa-location-dot"></i>
        <p>{{ visit.location }}</p>
      </div>
      <div className="visit-block-info">
        <i class="fa-solid" :class="[`text-${visit.status}`, visit.icon]"></i>
        <p :class="[`text-${visit.status}`, 'w-80']">{{ visit.status_description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions ,mapState} from "vuex";

export default {
  computed: mapState([
    "visits",
  ]),
  methods: {
    ...mapActions(["deleteVisit"]),
  
  },
  props: {
    visit: Object,
    isFromNotification : Boolean
  },
};
</script>
