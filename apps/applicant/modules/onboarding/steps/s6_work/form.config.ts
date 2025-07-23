"use client";
import _ from "moment";

export const formProps: any = {
  initial: {
    specification: [],
    orthodontics: [],
    work: [],
    academics: [],
  },

  // > STEPS
  steps: [
    "Personal Details",
    "Guardian Details",
    "Enroll Details",
    "Extra Details",
  ],
  stepType: "general",
  stepClickable: false,
  initialStep: 0,

  // > VALIDATION
  validation: [],

  // > SUBMIT
  transformDataOnSubmit: (formdata: any) => {
    const { image, ...res } = formdata;


    return {
      ...res,
      ...(formdata.image instanceof File ? { image: formdata.image } : {}),
      specification: JSON.stringify(formdata.specification),
    };
  },
  submitFormData: true,

  // > API

  submitProps: {
    keyIgnore: [],
    valueIgnore: [],
    stringify: false,
  },
};
