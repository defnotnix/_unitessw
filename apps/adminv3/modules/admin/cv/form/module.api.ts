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
      endpoint: `/cvmake/personal/info/${id}/`,
    });
  },

  create: async (body: any) => {
    return await apiDispatch.post({
      endpoint: "/cvmake/personal/info/",
      body,
    });
  },
  update: async (body: any, id: any) => {
    return await moduleApiCall.editRecord("/cvmake/personal/info/", body, id);
  },
};

export const apiBackground = {
  get: async (id: any) => {
    return await apiDispatch.get({
      endpoint: `/cvmake/background/${id}/`,
    });
  },
  create: async (body: any) => {
    return await apiDispatch.post({
      endpoint: "/cvmake/background/",
      body,
    });
  },
  update: async (body: any, id: any) => {
    return await moduleApiCall.editRecord("/cvmake/background/", body, id);
  },
};

export const apiPhysical = {
  get: async (id: any) => {
    return await apiDispatch.get({
      endpoint: `/cvmake/physical/${id}/`,
    });
  },
  create: async (body: any) => {
    return await apiDispatch.post({
      endpoint: "/cvmake/physical/",
      body,
    });
  },
  update: async (body: any, id: any) => {
    return await moduleApiCall.editRecord("/cvmake/physical/", body, id);
  },
};

export const apiStory = {
  get: async (id: any) => {
    return await apiDispatch.get({
      endpoint: `/cvmake/story/${id}/`,
    });
  },
  create: async (body: any) => {
    return await apiDispatch.post({
      endpoint: "/cvmake/story/",
      body,
    });
  },
  update: async (body: any, id: any) => {
    return await moduleApiCall.editRecord("/cvmake/story/", body, id);
  },
};

export const apiEducation = {
  delete: async (id: any) => {
    return await moduleApiCall.deleteRecord("/cvmake/education/", id);
  },
  get: async (id: any) => {
    return await apiDispatch.get({
      endpoint: `/cvmake/education/${id}/`,
    });
  },
  create: async (body: any) => {
    return await apiDispatch.post({
      endpoint: "/cvmake/education/",
      body,
    });
  },
  update: async (body: any, id: any) => {
    return await moduleApiCall.editRecord("/cvmake/education/", body, id);
  },
};

export const apiWork = {
  delete: async (id: any) => {
    return await moduleApiCall.deleteRecord("/cvmake/work/experience/", id);
  },
  get: async (id: any) => {
    return await apiDispatch.get({
      endpoint: `/cvmake/work/experience/${id}/`,
    });
  },
  create: async (body: any) => {
    return await apiDispatch.post({
      endpoint: "/cvmake/work/experience/",
      body,
    });
  },
  update: async (body: any, id: any) => {
    return await moduleApiCall.editRecord("/cvmake/work/experience/", body, id);
  },
};

export const apiLicense = {
  delete: async (id: any) => {
    return await moduleApiCall.deleteRecord(
      "/cvmake/license/qualification/",
      id
    );
  },
  get: async (id: any) => {
    return await apiDispatch.get({
      endpoint: `/cvmake/license/qualification/${id}/`,
    });
  },
  create: async (body: any) => {
    return await apiDispatch.post({
      endpoint: "/cvmake/license/qualification/",
      body,
    });
  },
  update: async (body: any, id: any) => {
    return await moduleApiCall.editRecord(
      "/cvmake/license/qualification/",
      body,
      id
    );
  },
};
