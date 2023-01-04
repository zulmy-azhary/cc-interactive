<script setup lang="ts">
import { computed } from "vue";
import { Text } from ".";
import { alphabets } from "../helper";
type Props = {
  fullName: string;
};
const props = defineProps<Props>();

const getName = computed(() => {
  let names = props.fullName.split(" ");

  if (!names.join("")) names = ["Jane", "Appleseed"];
  const [firstName, middleName, lastName] = names;

  return { firstName, middleName, lastName };
});
</script>

<template>
  <div class="card-front__footer-name">
    <Text
      :length="getName.firstName.length"
      :value="getName.firstName"
      :defaultValue="getName.firstName"
      :chars="alphabets"
    />
    <Text
      :length="getName.middleName ? getName.middleName.length : 0"
      :value="getName.middleName"
      :defaultValue="getName.middleName"
      :chars="alphabets"
    />
    <Text
      :length="getName.lastName ? getName.lastName.length : 0"
      :value="getName.lastName"
      :defaultValue="getName.lastName"
      :chars="alphabets"
    />
  </div>
</template>

<style scoped>
.card-front__footer-name {
  display: flex;
  font-size: 0.6rem;
  column-gap: 0.35rem;
}

@media (min-width: 768px) {
  .card-front__footer-name {
    font-size: 0.7rem;
    column-gap: 0.5rem;
  }
}

@media (min-width: 1024px) {
  .card-front__footer-name {
    font-size: 0.8rem;
    column-gap: 0.75rem;
  }
}
@media (min-width: 1440px) {
  .card-front__footer-name {
    font-size: 0.875rem;
  }
}
</style>
