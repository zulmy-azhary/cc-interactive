<script setup lang="ts"></script>

<template>
  <div class="card card-back"></div>
</template>

<style scoped>
.card-back {
  color: var(--lightGrayishViolet);
  background: url("/assets/images/bg-card-back.png") no-repeat 50% / cover;
  position: relative;
}

@media (min-width: 1024px) {
  .card-back {
    transform: translateX(50%);
  }
}
</style>
