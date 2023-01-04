<script setup lang="ts">
import { computed } from "vue";
import { Text } from ".";
import { numbers } from "../helper";
type Props = {
  cardNumber: string;
};
const props = defineProps<Props>();

const getNumber = computed(() => {
  const sections = props.cardNumber.split(" ");
  const remaining = new Array(4 - sections.length).fill(0);
  return [...sections, ...remaining] as string[];
});
</script>

<template>
  <div class="card-front__number">
    <template v-for="item in getNumber">
      <Text :length="4" :value="item.toString()" :chars="numbers" />
    </template>
  </div>
</template>

<style scoped>
.card-front__number {
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  column-gap: 0.5rem;
}

@media (min-width: 1024px) {
  .card-front__number {
    column-gap: 0.875rem;
    font-size: 1.25rem;
  }
}

@media (min-width: 1440px) {
  .card-front__number {
    column-gap: 1rem;
    font-size: 1.5rem;
  }
}
</style>
