export const headerStyles = {
  root: {
    base: "fixed top-0 left-0 right-0 z-10 h-24 w-full common-x-spacing bg-darker border-b border-secondary common-transition",
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
          base: "uppercase font-extralight tracking-wide hover:text-secondary common-transition",
        },
      },
    },
  },
};
