<script setup lang="ts">
import { Text } from ".";
import { numbers } from "../helper";
type Props = {
  expiration: {
    months: string;
    years: string;
  };
};
defineProps<Props>();
</script>

<template>
  <div class="card-front__footer-expiration">
    <Text :length="2" :value="expiration.months.toString()" :defaultValue="'00'" :chars="numbers" />
    <span>/</span>
    <Text :length="2" :value="expiration.years.toString()" :defaultValue="'00'" :chars="numbers" />
  </div>
</template>

<style scoped>
.card-front__footer-expiration {
  display: flex;
  align-items: center;
  font-size: 0.6rem;
  column-gap: 0.125rem;
}

@media (min-width: 1024px) {
  .card-front__footer-expiration {
    column-gap: 0.25rem;
    font-size: 0.75rem;
  }
}
</style>
