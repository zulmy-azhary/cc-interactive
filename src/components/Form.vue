<script setup lang="ts">
import { data } from "../store";
import type { Name } from "../types";
import { Input } from ".";
import { v$ } from '../store';

type ButtonEvent = (e: "buttonClicked") => void;
const emit = defineEmits<ButtonEvent>();

const checkLength = (target: HTMLInputElement) => {
  const name = target.name as Name;
  const value = target.value;

  const checkFullName = name === "fullName" && value.length > 21;
  const checkCvc = name === "cvc" && value.length > 3;
  const checkExpiration = (name === "months" || name === "years") && value.length > 2;

  if (checkFullName || checkCvc || checkExpiration) return true;
};

const updateNumber = (input: HTMLInputElement) => {
  const original = [...input.value.replaceAll(" ", "")];

  if (original.length > 16) return;
  const positions = [4, 8, 12];
  const modified: string[] = [];

  original.map((value, idx) => {
    modified.push(value);
    if (positions.includes(idx + 1) && idx !== original.length - 1) modified.push(" ");
  });

  data.cardNumber = modified.join("");
};

const onSubmit = async () => {
  const result = await v$.value.$validate();
  if (result) {
    emit("buttonClicked");
  }
  console.log(data);
  console.log(v$.value.$errors);
};

const onChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const name = target.name as Name;

  if (checkLength(target)) return;
  if (name === "cardNumber") updateNumber(target);
  else data[name] = target.value;
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control">
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
        placeholder="e.g. 1234 5678 9123 0000"
      />
      <Input
        type="number"
        expiration
        v-bind="{ data }"
        @onChange="onChange"
        label="Exp. Date (MM/YY)"
      />
      <Input
        type="number"
        name="cvc"
        v-bind="{ data }"
        @onChange="onChange"
        label="CVC"
        placeholder="e.g. 123"
      />
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

.form-control {
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
