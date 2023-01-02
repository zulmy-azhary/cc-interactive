import { reactive, computed } from "vue";
import type { Data } from "../types";
import { useVuelidate } from "@vuelidate/core";
import { required, maxLength, helpers } from "@vuelidate/validators";

export const initialValue: Data = {
  fullName: "",
  cardNumber: "",
  months: "",
  years: "",
  cvc: "",
};

export const data = reactive({ ...initialValue });

const requiredMsg = (field: string) => {
  return helpers.withMessage(`${field} can't be blank`, required);
};

const rules = computed(() => {
  return {
    fullName: { required: requiredMsg("Name") },
    cardNumber: { required: requiredMsg("Card Number"), maxLength: maxLength(19) },
    months: { required, maxLength: maxLength(2) },
    years: { required, maxLength: maxLength(2) },
    cvc: { required: requiredMsg("CVC") },
  };
});

export const v$ = useVuelidate(rules, data);
