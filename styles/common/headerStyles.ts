export const headerStyles = {
  root: {
    base: "fixed top-0 left-0 right-0 z-10 h-24 w-full px-8 backdrop-blur-xl bg-black/70 common-transition", // border-b border-secondary
  },
  container: {
    base: "h-full w-full max-w-7xl mx-auto flex items-center justify-between",
  },
  logo: {
    wrapper: "uppercase",
    image: "",
  },
  nav: {
    base: "flex hidden md:block",
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
