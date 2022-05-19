<template>
  <div>
    <ul class="navigation">
      <li @click="filter('today')">
        <span :class="[this.chosenFilter === 'today' && 'active']">Dziś</span>
      </li>
      <!-- <li @click="filter('week')">
        <span :class="[this.chosenFilter === 'week' && 'active']">Tydzień</span>
      </li>
      <li @click="filter('month')">
        <span :class="[this.chosenFilter === 'month' && 'active']"
          >Miesiąc</span
        >
      </li> -->
      <li @click="filter('all')">
        <span :class="[this.chosenFilter === 'all' && 'active']"
          >Wszystkie
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenFilter: "all",
    };
  },
  props: {
    visits: Array,
  },
  methods: {
    filter(filterOpr){
      this.chosenFilter = filterOpr
      this.$emit('filter', filterOpr)
    }
  }
};
</script>
