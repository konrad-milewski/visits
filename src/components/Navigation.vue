<template>
  <div>
    <ul class="navigation">
      <li @click="this.chosenFilter = 'today'">
        <a :class="[this.chosenFilter === 'today' && 'active']">Dziś</a>
      </li>
      <li @click="this.chosenFilter = 'week'">
        <a :class="[this.chosenFilter === 'week' && 'active']">Tydzień</a>
      </li>
      <li @click="this.chosenFilter = 'month'">
        <a :class="[this.chosenFilter === 'month' && 'active']">Miesiąc</a>
      </li>
      <li @click="this.chosenFilter = 'all'">
        <a :class="[this.chosenFilter === 'all' && 'active']">Wszystkie </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenFilter: "today",
    };
  },
};
</script>
