<script setup lang="ts">
import { data, initialValue } from "../store";

type SubmitButtonEvent = (e: "onSubmitButton") => void;
const emit = defineEmits<SubmitButtonEvent>();

const reset = () => {
  emit("onSubmitButton");
  Object.assign(data, initialValue);
  console.clear();
};
</script>

<template>
  <div class="wrapper">
    <img class="icon-complete" src="/assets/images/icon-complete.svg" />
    <div class="description">
      <h2 class="heading">Thank you!</h2>
      <h4 class="text">We've added your card details</h4>
    </div>
    <button type="button" class="button" @click="reset">Continue</button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2.5rem;
}

.description {
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.heading {
  color: var(--veryDarkGrayishViolet);
  font-size: 1.75rem;
  line-height: 1.5rem;
  letter-spacing: 4px;
}

.text {
  color: var(--darkGrayishViolet);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
}

.icon-complete {
  width: fit-content;
  height: fit-content;
  object-fit: contain;
}
</style>
