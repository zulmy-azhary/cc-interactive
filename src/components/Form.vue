<script setup lang="ts">
import { data } from "../store";
import type { Name } from "../types";
import Input from "./Input.vue";

type ButtonEvent = (e: "buttonClicked") => void;
const emit = defineEmits<ButtonEvent>();

const onSubmit = () => {
  emit("buttonClicked");
  console.log(data);
};

const onChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  data[target.name as Name] = target.value;
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="formControl">
      <Input
        name="fullName"
        label="Cardholder Name"
        v-bind="{ data }"
        @onChange="onChange"
        placeholder="e.g. Jane Appleseed"
      />
      <Input
        name="cardNumber"
        label="Card Number"
        v-bind="{ data }"
        @onChange="onChange"
        type="number"
        placeholder="e.g. 1234 5678 9123 0000"
      />
      <Input expiration v-bind="{ data }" @onChange="onChange" label="Exp. Date (MM/YY)" />
      <Input name="cvc" v-bind="{ data }" @onChange="onChange" label="CVC" placeholder="e.g. 123" />
    </div>
    <button class="button">Confirm</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 100%;
  padding: 0 2rem;
}

.formControl {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
}

@media (min-width: 768px) {
  form {
    width: calc(var(--mobile) * 1.5);
  }
}

@media (min-width: 1024px) {
  form {
    width: 70%;
  }
}

@media (min-width: 1440px) {
  form {
    width: 50%;
  }
}
</style>
