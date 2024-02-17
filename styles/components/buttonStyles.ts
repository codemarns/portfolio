export const buttonStyles = {
  root: {
    base: "outline-none relative inline-flex items-center justify-center gap-2 font-normal transition-all",
    block: {
      base: "w-full",
    },
    cursors: {
      default: "cursor-pointer",
      disable: "cursor-not-allowed",
    },
    sizes: {
      sm: "h-8 px-4 text-sm",
      md: "h-10 px-5 text-base",
      lg: "h-12 px-6 text-lg",
      xl: "h-14 px-7 text-xl",
    },
    corners: {
      flat: "rounded-none",
      "soft-edge": "rounded",
      rounded: "rounded-full",
    },
    // NOTE: IF NO LABEL OR CHILDREN
    widthSizes: {
      sm: "w-8 !p-0",
      md: "w-10 !p-0",
      lg: "w-12 !p-0",
      xl: "w-14 !p-0",
    },
    variants: {
      solid: {
        base: "text-white",
        default: "bg-secondary hover:bg-secondary-600 focus:bg-secondary-600 active:bg-secondary-700",
        disable: "aria-disabled:bg-secondary-200",
      },
      outline: {
        base: "border",
        default: "hover:bg-secondary-50 focus:bg-secondary-50 active:bg-secondary-100 border-secondary hover:border-secondary-600 focus:border-secondary-600 active:border-secondary-700 text-secondary hover:text-secondary-600 focus:text-secondary-600 active:text-secondary-700",
        disable: "aria-disabled:border-secondary-200 aria-disabled:text-secondary-200",
      },
      ghost: {
        base: "",
        default: "text-secondary hover:text-secondary-600 focus:text-secondary-600 active:text-secondary-700 hover:bg-secondary-50 focus:bg-secondary-50 active:bg-secondary-100",
        disable: "aria-disabled:text-secondary-200",
      },
    },
    icon: {
      base: "animate-spin",
    },
    badge: {
      base: "absolute sm:static -top-1.5 -right-1.5 w-auto h-4 px-1.5 inline-flex items-center justify-center rounded-full bg-secondary-600 text-white text-xs font-extralight leading-none",
    },
  },
};
