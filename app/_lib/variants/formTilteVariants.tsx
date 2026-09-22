export const formTitleVariants: {
  authTitle: { mainTitle: string; subTitle: string };

  projectFormTitle: { mainTitle: string; subTitle: string };
} = {
  authTitle: {
    mainTitle:
      "sm:text-[30px] text-[28px] font-display-lg  text-neutral-dark tracking-[-0.75px] mb-2",
    subTitle: "text-body-md font-body-md text-neutral-medium",
  },

  projectFormTitle: {
    mainTitle: " text-2xl font-display-lg text-neutral-dark capitalize",
    subTitle: "text-body-md font-body-md text-neutral-medium",
  },
};
