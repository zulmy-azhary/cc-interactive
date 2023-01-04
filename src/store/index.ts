import { reactive, computed, watch } from "vue";
import type { Data } from "../types";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, helpers, minValue, maxValue } from "@vuelidate/validators";

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

const minLengthMsg = (message: string, length: number) => {
  return helpers.withMessage(message, minLength(length));
};

const regexMsg = (message: string, regex: RegExp) => {
  return helpers.withMessage(message, helpers.regex(regex));
};

const rules = computed(() => {
  const currentYear = new Date().getFullYear().toString().substring(2);

  return {
    fullName: {
      required: requiredMsg("Name"),
      minLength: minLengthMsg("Name must contain at least 6 characters", 6),
      regex: regexMsg("Invalid Name", /^[a-zA-Z\s]+$/),
    },
    cardNumber: {
      required: requiredMsg("Card Number"),
      minLength: minLengthMsg("Invalid Card Number", 16 + 3),
      regex: regexMsg("Invalid Card Number", /^[\d\s]+$/),
    },
    months: {
      required: requiredMsg("Exp. Date"),
      regex: regexMsg("Invalid Month", /^(0[1-9])|(1[0-2])$/),
    },
    years: {
      required: requiredMsg("Exp. Date"),
      regex: regexMsg("Invalid Year", /^([0-9][0-9])$/),
      minValue: helpers.withMessage("Expired Card", minValue(+currentYear)),
      maxValue: helpers.withMessage("Max Exp. Year is 5 years", maxValue(+currentYear + 5)),
    },
    cvc: {
      required: requiredMsg("CVC"),
      minLength: minLengthMsg("Invalid CVC", 3),
      minValue: helpers.withMessage("Invalid CVC", minValue(1)),
    },
  };
});

export const v$ = useVuelidate(rules, data);
