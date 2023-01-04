<script setup lang="ts">
import { data, v$ } from "../store";
import { Input } from ".";
import type { Name } from "../types";

type SubmitButtonEvent = (e: "onSubmitButton") => void;
const emit = defineEmits<SubmitButtonEvent>();

// Check length for each input
const reachMaxLength = (target: HTMLInputElement) => {
  const { name, value } = target;

  const checkFullName = name === "fullName" && value.length > 21;
  const checkCardNumber = name === "cardNumber" && value.replaceAll(" ", "").length > 16;
  const checkCVC = name === "cvc" && value.length > 3;
  const checkExpired = (name === "months" || name === "years") && value.length > 2;

  if (checkFullName || checkCardNumber || checkCVC || checkExpired) return true;
};

// For Card Number Input
const transformCardNumberField = (target: HTMLInputElement) => {
  const text = target.value.replace(/\s/g, "");
  const filteredValue = text.replace(/(.{4})/g, "$1 ").trim();

  data.cardNumber = filteredValue;
};

// onChange Handler
const inputHandler = (target: HTMLInputElement) => {
  if (reachMaxLength(target)) return (target.value = data[target.name as Name]);
  if (target.name === "cardNumber") return transformCardNumberField(target);
  return (data[target.name as Name] = target.value.trim().replaceAll(/\s+/g, " "));
};

const onSubmit = async () => {
  const result = await v$.value.$validate();
  if (result) {
    emit("onSubmitButton");
    v$.value.$reset();
    console.log("%cHere's the output : ", "color:red; font-size: 1.25rem;", { ...data });
  }
};
</script>

<template>
  <form class="content__form" @submit.prevent="onSubmit">
    <div class="content__form__form-control">
      <Input
        name="fullName"
        label="Cardholder Name"
        v-bind="{ data }"
        placeholder="e.g. Jane Appleseed"
        @onChange="inputHandler"
      />
      <Input
        name="cardNumber"
        label="Card Number"
        v-bind="{ data }"
        placeholder="e.g. 1234 5678 9123 0000"
        @onChange="inputHandler"
      />
      <Input
        type="number"
        expiration
        v-bind="{ data }"
        label="Exp. Date (MM/YY)"
        @onChange="inputHandler"
      />
      <Input
        type="number"
        name="cvc"
        v-bind="{ data }"
        label="CVC"
        placeholder="e.g. 123"
        @onChange="inputHandler"
      />
    </div>
    <button class="button">Confirm</button>
  </form>
</template>

<style scoped>
.content__form {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

.content__form__form-control {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
}
</style>
