<script setup lang="ts">
import { BackCard, FrontCard } from ".";
</script>

<template>
  <aside class="side">
    <FrontCard name="Testing" />
    <BackCard />
  </aside>
</template>

<style scoped>
.side {
  display: grid;
  grid-gap: 2rem;
  background: url("/assets/images/bg-main-mobile.png") no-repeat 50% / cover;
  place-content: center;
}
@media (min-width: 1024px) {
  .side {
    background: url("/assets/images/bg-main-desktop.png") center/cover;
  }
}
</style>
