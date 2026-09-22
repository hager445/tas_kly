export const routes = {
  dashboard: {
    projects: {
      index: "/dashboard/projects",
      nestedRoutes: {
        epics: (id: string | undefined) => `/dashboard/projects/${id}/epics`,
        members: (id: string | undefined) =>
          `/dashboard/projects/${id}/members`,

        tasks: (id: string | undefined) => `/dashboard/projects/${id}/tasks`,
        details: (id: string | undefined) => `/dashboard/projects/${id}/edit`,
      },
      add: "/dashboard/projects/add",
    },
    statics: {
      index: "/dashboard/statcis",
      add: "/dashboard/projects/add",
      detail: (id: string) => `/dashboard/projects/${id}`,
      edit: (id: string) => `/dashboard/projects/${id}/edit`,
    },
  },
};
