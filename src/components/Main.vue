<script setup lang="ts">
import { Finish, Form } from ".";
import { ref } from "vue";

const isValid = ref(false);
const setValid = () => {
  isValid.value = !isValid.value;
};
</script>

<template>
  <main class="main">
    <component :is="isValid ? Finish : Form" @buttonClicked="setValid" />
  </main>
</template>

<style scoped>
.main {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
