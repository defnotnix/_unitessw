import { apiDispatch, moduleApiCall } from "@vframework/core";
import { jwtDecode } from "jwt-decode";

export async function apiCategory() {
  return await apiDispatch.get({
    endpoint: `/applicant/category/`,
  });
}

export const apiPersonalInformation = {
  get: async (id: any) => {
    return await apiDispatch.get({
      endpoint: `/applicant/info/id/${id}/`,
    });
  },

  create: async (body: any) => {
    return await apiDispatch.post({
      endpoint: "/applicant/info/",
      body,
    });
  },
  update: async (body: any, id: any) => {
    return await moduleApiCall.editRecord("/applicant/info/", body, id);
  },
};

export const apiIdentification = {
  get: async (id: any) => {
    return await apiDispatch.get({
      endpoint: `/applicant/identification/${id}/`,
    });
  },

  create: async (body: any) => {
    return await apiDispatch.post({
      endpoint: "/applicant/identification/",
      body,
    });
  },
  update: async (body: any, id: any) => {
    return await moduleApiCall.editRecord(
      "/applicant/identification/",
      body,
      id
    );
  },
};

export const apiBackground = {
  get: async (id: any) => {
    return await apiDispatch.get({
      endpoint: `/applicant/background/${id}/`,
    });
  },
  create: async (body: any) => {
    return await apiDispatch.post({
      endpoint: "/applicant/background/",
      body,
    });
  },
  update: async (body: any, id: any) => {
    return await moduleApiCall.editRecord("/applicant/background/", body, id);
  },
};

export const apiPhysical = {
  get: async (id: any) => {
    return await apiDispatch.get({
      endpoint: `/applicant/physical/${id}/`,
    });
  },
  create: async (body: any) => {
    return await apiDispatch.post({
      endpoint: "/applicant/physical/",
      body,
    });
  },
  update: async (body: any, id: any) => {
    return await moduleApiCall.editRecord("/applicant/physical/", body, id);
  },
};

export const apiStory = {
  get: async (id: any) => {
    return await apiDispatch.get({
      endpoint: `/applicant/story/${id}/`,
    });
  },
  create: async (body: any) => {
    return await apiDispatch.post({
      endpoint: "/applicant/story/",
      body,
    });
  },
  update: async (body: any, id: any) => {
    return await moduleApiCall.editRecord("/applicant/story/", body, id);
  },
};

export const apiEducation = {
  delete: async (id: any) => {
    return await moduleApiCall.deleteRecord("/applicant/education/", id);
  },
  get: async (id: any) => {
    return await apiDispatch.get({
      endpoint: `/applicant/education/${id}/`,
    });
  },
  create: async (body: any) => {
    return await apiDispatch.post({
      endpoint: "/applicant/education/",
      body,
    });
  },
  update: async (body: any, id: any) => {
    return await moduleApiCall.editRecord("/applicant/education/", body, id);
  },
};

export const apiWork = {
  delete: async (id: any) => {
    return await moduleApiCall.deleteRecord("/applicant/work/experience/", id);
  },
  get: async (id: any) => {
    return await apiDispatch.get({
      endpoint: `/applicant/work/experience/${id}/`,
    });
  },
  create: async (body: any) => {
    return await apiDispatch.post({
      endpoint: "/applicant/work/experience/",
      body,
    });
  },
  update: async (body: any, id: any) => {
    return await moduleApiCall.editRecord(
      "/applicant/work/experience/",
      body,
      id
    );
  },
};

export const apiLicense = {
  delete: async (id: any) => {
    return await moduleApiCall.deleteRecord(
      "/applicant/license/qualification/",
      id
    );
  },
  get: async (id: any) => {
    return await apiDispatch.get({
      endpoint: `/applicant/license/qualification/${id}/`,
    });
  },
  create: async (body: any) => {
    return await apiDispatch.post({
      endpoint: "/applicant/license/qualification/",
      body,
    });
  },
  update: async (body: any, id: any) => {
    return await moduleApiCall.editRecord(
      "/applicant/license/qualification/",
      body,
      id
    );
  },
};
