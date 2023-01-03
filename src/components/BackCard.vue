<script setup lang="ts">
import { Text } from ".";
import { alphanumerics } from "../helper";
import { data } from "../store";
</script>

<template>
  <div class="card card-back">
    <div class="card-back__cvc">
      <Text :length="3" :value="data.cvc.toString()" :defaultValue="'000'" :chars="alphanumerics" />
    </div>
  </div>
</template>

<style scoped>
.card-back {
  color: var(--lightGrayishViolet);
  background: url("/assets/images/bg-card-back.png") no-repeat 50% / cover;
  position: relative;
  transform: translate(12.5%, -60%);
  position: relative;
}

.card-back__cvc {
  position: absolute;
  top: 44.25%;
  right: 12%;
  display: flex;
  column-gap: 0.075rem;
  color: white;
  font-size: 0.75rem;
  letter-spacing: 2px;
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
