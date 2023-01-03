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
  <div class="card-front__expiration">
    <Text :length="2" :value="expiration.months.toString()" :defaultValue="'00'" :chars="numbers" />
    <span>/</span>
    <Text :length="2" :value="expiration.years.toString()" :defaultValue="'00'" :chars="numbers" />
  </div>
</template>

<style scoped>
.card-front__expiration {
  display: flex;
  gap: 0.25rem;
  align-items: center;
  font-size: 0.75rem;
}
</style>
