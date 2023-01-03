<script setup lang="ts">
import { data, v$ } from "../store";
import { Input } from ".";
import type { Name } from "../types";

type ButtonEvent = (e: "buttonClicked") => void;
const emit = defineEmits<ButtonEvent>();

// Check length for each input
const checkLength = (target: HTMLInputElement) => {
  const name = target.name as Name;
  const value = target.value;

  const checkFullName = name === "fullName" && value.length > 21;
  const checkCVC = name === "cvc" && value.length > 3;
  const checkExpired = (name === "months" || name === "years") && value.length > 2;

  if (checkFullName) return true;
  if (checkCVC) return true;
  if (checkExpired) return true;
};

// For Card Number Input
const updateNumber = (input: HTMLInputElement) => {
  const text = input.value.replace(/\s/g, "");

  if (text.length > 16) return (input.value = data.cardNumber);

  const filter = text.replace(/(.{4})/g, "$1 ").trim();
  data.cardNumber = filter;
};

// onChange Handler
const inputHandler = (target: HTMLInputElement) => {
  if (checkLength(target)) return (target.value = data[target.name as Name]);
  if (target.name === "cardNumber") return updateNumber(target);
  return (data[target.name as Name] = target.value);
};

const onSubmit = async () => {
  const result = await v$.value.$validate();
  if (result) {
    emit("buttonClicked");
    v$.value.$reset();
  }
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control">
      <Input
        name="fullName"
        label="Cardholder Name"
        v-bind="{ data }"
        placeholder="e.g. Jane Appleseed"
        @inputHandler="inputHandler"
      />
      <Input
        name="cardNumber"
        label="Card Number"
        v-bind="{ data }"
        placeholder="e.g. 1234 5678 9123 0000"
        @inputHandler="inputHandler"
      />
      <Input
        type="number"
        expiration
        v-bind="{ data }"
        label="Exp. Date (MM/YY)"
        @inputHandler="inputHandler"
      />
      <Input
        type="number"
        name="cvc"
        v-bind="{ data }"
        label="CVC"
        placeholder="e.g. 123"
        @inputHandler="inputHandler"
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
