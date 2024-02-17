export const headerStyles = {
  root: {
    base: "fixed top-0 left-0 right-0 z-10 h-20 w-full common-spacing bg-dark border-b border-primary common-transition",
  },
  container: {
    base: "h-full w-full max-w-7xl mx-auto flex items-center justify-between",
  },
  logo: {
    wrapper: "uppercase",
    image: "",
  },
  nav: {
    base: "flex",
    ul: {
      base: "flex items-center gap-8",
      li: {
        base: "list-none",
        link: {
          base: "uppercase hover:text-primary common-transition",
        },
      },
    },
  },
};
