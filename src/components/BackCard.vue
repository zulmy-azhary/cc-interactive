<script setup lang="ts"></script>

<template>
  <div class="card card-back"></div>
</template>

<style scoped>
.card-back {
  color: var(--lightGrayishViolet);
  background: url("/assets/images/bg-card-back.png") no-repeat 50% / cover;
  position: relative;
  transform: translate(12.5%, -60%);
}

@media (min-width: 768px) {
  .card-back {
    transform: translate(35%, -65%);
  }
}

@media (min-width: 1024px) {
  .card-back {
    transform: translateX(20%);
  }
}
@media (min-width: 1440px) {
  .card-back {
    transform: translateX(50%);
  }
}
</style>
