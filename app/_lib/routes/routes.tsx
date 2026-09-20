export const routes = {
  dashboard: {
    projects: {
      index: "/dashboard/projects?page=1",
      add: "/dashboard/projects/add",
      detail: (id: string) => `/dashboard/projects/${id}`,
      edit: (id: string) => `/dashboard/projects/${id}/edit`,
    },
    statics: {
      index: "/dashboard/statcis",
      add: "/dashboard/projects/add",
      detail: (id: string) => `/dashboard/projects/${id}`,
      edit: (id: string) => `/dashboard/projects/${id}/edit`,
    },
  },
};
