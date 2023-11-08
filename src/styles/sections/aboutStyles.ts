export const aboutStyles = {
  root: {
    base: "h-auto w-full px-8 py-16 lg:py-20 bg-default-950", // bg-gradient-to-b from-secondary-700 to-secondary-800
  },
  container: {
    base: "w-full max-w-[1024px] mx-auto text-center space-y-16",
  },
  title: {
    base: "inline-block relative text-secondary text-3xl md:text-5xl font-bold before:content-[''] before:absolute before:-bottom-6 before:left-1/2 before:transform before:-translate-x-1/2 before:h-1.5 before:w-16 before:bg-pink-500 before:rounded-full",
  },
  description: {
    wrapper: "space-y-4",
    base: "text-default-300",
  },
};
