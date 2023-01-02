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
  for (let i = 65; i < 91; i++) {
    alphabets.push(String.fromCharCode(i));
  }

  return { firstName, middleName, lastName, alphabets };
});
</script>

<template>
  <div class="card-front__footer-name">
    <Text
      :length="getName.firstName.length"
      :value="getName.firstName"
      :defaultValue="getName.firstName"
      :chars="getName.alphabets"
    />
    <Text
      :length="getName.middleName ? getName.middleName.length : 0"
      :value="getName.middleName"
      :defaultValue="getName.middleName"
      :chars="getName.alphabets"
    />
    <Text
      :length="getName.lastName ? getName.lastName.length : 0"
      :value="getName.lastName"
      :defaultValue="getName.lastName"
      :chars="getName.alphabets"
    />
  </div>
</template>

<style scoped>
.card-front__footer-name {
  display: flex;
  gap: 0.75rem;
  font-size: 0.875rem;
}
</style>
