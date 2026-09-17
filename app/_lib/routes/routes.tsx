export const routes = {
  dashboard: {
    projects: {
      index: "/dashboard/projects",
      add: "/dashboard/projects/add",
      detail: (id: string) => `/dashboard/projects/${id}`,
      edit: (id: string) => `/dashboard/projects/${id}/edit`,
    },
  },
};
