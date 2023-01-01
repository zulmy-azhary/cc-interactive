<script setup lang="ts">
import { data, initialValue } from "../store";

type ButtonEvent = (e: "buttonClicked") => void;
const emit = defineEmits<ButtonEvent>();

const reset = () => {
  emit("buttonClicked");
  Object.assign(data, initialValue);
};
</script>

<template>
  <div>
    <p>Finish</p>
    <button type="button" class="button" @click="reset">Continue</button>
  </div>
</template>
