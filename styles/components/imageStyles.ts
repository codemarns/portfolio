export const imageStyles = {
  root: {
    base: "relative w-full flex items-center justify-center overflow-hidden",
    corner: {
      flat: "rounded-none",
      "soft-edge": "rounded",
      rounded: "rounded-full",
    },
  },
  wrapper: {
    base: "relative w-full",
  },
  overlay: {
    base: "absolute inset-0 w-full h-full flex items-center justify-center bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-secondary/10 before:backdrop-blur-md",
    corner: {
      flat: "rounded-none before:rounded-none",
      "soft-edge": "rounded before:rounded",
      rounded: "rounded-full before:rounded-full",
    },
  },
  img: {
    base: "relative w-full h-full object-cover object-center italic duration-300 ease-in-out transition-all",
    corner: {
      flat: "rounded-none",
      "soft-edge": "rounded",
      rounded: "rounded-full",
    },
  },
};
