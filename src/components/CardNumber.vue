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
  column-gap: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
