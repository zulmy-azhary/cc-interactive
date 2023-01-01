import { reactive } from "vue";
import type { Data } from "../types";

export const initialValue: Data = {
  fullName: "",
  cardNumber: "",
  months: "",
  years: "",
  cvc: "",
};

export const data = reactive({ ...initialValue });
