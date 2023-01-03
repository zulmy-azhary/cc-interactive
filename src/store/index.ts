import { reactive, computed } from "vue";
import type { Data } from "../types";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength, helpers } from "@vuelidate/validators";

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
    fullName: { required: requiredMsg("Name"), maxLength: maxLength(21) },
    cardNumber: { required: requiredMsg("Card Number"), maxLength: maxLength(16 + 3) },
    months: { required: requiredMsg("Exp. Date"), minLength: minLength(2) },
    years: { required: requiredMsg("Exp. Date"), minLength: minLength(2) },
    cvc: { required: requiredMsg("CVC"), maxLength: maxLength(3) },
  };
});

export const v$ = useVuelidate(rules, data);
