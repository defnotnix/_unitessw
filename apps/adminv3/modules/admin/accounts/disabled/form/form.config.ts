"use client";
import _ from "moment";

export const formProps: any = {
  initial: {
    perm_cv: true,
    perm_applicant: true,
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
    const { image, perm_cv, perm_applicant, ...rest } = formdata;

    const staffFlags = perm_cv
      ? { is_staff1: true }
      : perm_applicant
        ? { is_staff2: true }
        : { is_staff3: true };

    return {
      ...rest,
      ...staffFlags,
      is_admin: false,
      ...(image instanceof File ? { image } : {}),
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
