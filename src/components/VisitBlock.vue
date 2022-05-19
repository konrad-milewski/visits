<template>
  <div className="visit-block row">
    <div class="column">
      <div className="visit-block-info">
        <i class="fa-solid fa-user text-primary"></i>
        <p class="text-primary">{{visit.name}}</p>
      </div>
      <div className="visit-block-info">
        <i class="fa-solid fa-phone"></i>
        <p>{{visit.phone}}</p>
      </div>
      <div className="visit-block-info">
        <i class="fa-solid fa-comment"></i>
        <p>{{visit.description}}</p>
      </div>
    </div>
    <div class="column">
      <div className="visit-block-info">
        <i class="fa-solid fa-calendar"></i>
        <p>{{visit.date}} {{visit.time}}</p>
      </div>
      <div className="visit-block-info">
        <i class="fa-solid fa-location-dot"></i>
        <p>{{visit.location}}</p>
      </div>
      <div className="visit-block-info">
        <i class="fa-solid" :class="[`text-${visit.status}`, visit.icon]"></i>
        <p :class="[`text-${visit.status}`]">{{visit.status_description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visit: Object,
  },
}
</script>