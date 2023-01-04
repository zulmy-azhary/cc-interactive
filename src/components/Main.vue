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
    <section class="content">
      <component :is="isValid ? Finish : Form" @onSubmitButton="setValid" />
    </section>
  </main>
</template>

<style scoped>
.main {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 100%;
  padding: 0 1.25rem;
}

@media (min-width: 768px) {
  .content {
    padding: 0;
    width: calc(var(--mobile) * 1.5);
  }
}

@media (min-width: 1024px) {
  .content {
    width: 70%;
  }
}

@media (min-width: 1440px) {
  .content {
    width: 50%;
  }
}
</style>
