export const styles = {
  root: "flex items-center justify-center rounded-full",
  size: {
    width: {
      sm: "w-8",
      md: "w-10",
      lg: "w-12",
      xl: "w-14",
    },
    height: {
      sm: "h-8",
      md: "h-10",
      lg: "h-12",
      xl: "h-14",
    },
  },
  padding: {
    sm: "px-2",
    md: "px-4",
    lg: "px-6",
    xl: "px-8",
  },
  color: {
    default: "fill-default",
    primary: "fill-primary",
    secondary: "fill-secondary",
    success: "fill-success",
  },
  variant: {
    solid: {
      bgColor: {
        default: "bg-default hover:bg-default-600 active:bg-default-700",
        primary: "bg-primary hover:bg-primary-600 active:bg-primary-700",
        secondary:
          "bg-secondary hover:bg-secondary-600 active:bg-secondary-700",
        success: "bg-success hover:bg-success-600 active:bg-success-700",
      },
    },
    outline: {
      bgColor: {
        default:
          "border border-default hover:border-default-600 active:border-default-700",
        primary:
          "border border-primary hover:border-primary-600 active:border-primary-700",
        secondary:
          "border border-secondary hover:border-secondary-600 active:border-secondary-700",
        success:
          "border border-success hover:border-success-600 active:border-success-700",
      },
    },
    ghost: {
      bgColor: {
        default: "bg-transparent hover:bg-default-900 active:bg-default-100",
        primary: "bg-transparent hover:bg-primary-50 active:bg-primary-100",
        secondary:
          "bg-transparent hover:bg-secondary-50 active:bg-secondary-100",
        success: "bg-transparent hover:bg-success-50 active:bg-success-100",
      },
    },
  },
  corner: {
    flat: "rounded-none",
    "soft-edge": "rounded-lg",
    rounded: "rounded-full",
  },
};
