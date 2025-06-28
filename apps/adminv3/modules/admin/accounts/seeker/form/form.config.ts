"use client";

export const formProps: any = {
  initial: {
    items: [],
    pricelist: [],
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

    return {
      ...rest,
      is_admin: false,
      is_staff1: false,
      is_staff2: false,
      is_staff3: false,
      is_seeker: true,
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
