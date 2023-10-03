export type TContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * sm: (mobile) 425px;
   * md: (tablet) 768px;
   * lg: (laptop) 1024px;
   * xl: (laptop L) 1440px;
   * 2xl: (desktop) 100%;
   */
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  /**
   * unset: 0;
   * sm: 0.5rem;
   * md: 1rem;
   * lg: 1.5rem;
   * xl: 2rem;
   * 2xl: 2.5rem;
   */
  paddingX?: "unset" | "sm" | "md" | "lg" | "xl" | "2xl";
  /**
   * unset: 0;
   * sm: 0.5rem;
   * md: 1rem;
   * lg: 1.5rem;
   * xl: 2rem;
   * 2xl: 2.5rem;
   */
  paddingY?: "unset" | "sm" | "md" | "lg" | "xl" | "2xl";
};
