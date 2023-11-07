export const heroStyles = {
  root: {
    base: "h-[99vh] lg:h-fit w-full px-8 py-16 lg:py-20 flex items-center justify-center bg-gradient-to-b from-default-950 to-secondary-900",
  },
  container: {
    base: "h-fit w-full max-w-[1440px] mx-auto lg:px-8 lg:py-20 grid grid-cols-1 lg:grid-cols-[auto,_1fr] xl:grid-cols-2 gap-0 xl:gap-12 items-center duration-300 ease-out transition-all",
  },
  column: {
    left: {
      base: "p-8 flex items-center justify-center lg:justify-end",
      image: {
        wraper:
          "relative w-full max-w-[85%] xs:max-w-[250px] md:max-w-[300px] xl:max-w-[350px] inline-flex items-center justify-center p-[10%] xs:p-6 md:p-8 bg-secondary/[0.075] rounded-full before:content-[''] before:absolute before:-inset-10 before:bg-secondary/[0.025] before:rounded-full duration-300 ease-out transition-all",
        base: "w-full",
      },
    },
    right: {
      base: "py-8 px-0 lg:px-8 space-y-8 text-center lg:text-left",
      details: {
        base: "space-y-1 md:space-y-2",
        greet: {
          base: "text-base xs:text-lg md:text-xl font-extralight",
        },
        name: {
          base: "text-3xl xs:text-4xl md:text-6xl text-secondary font-bold -ml-1 duration-300 ease-out transition-all",
        },
        title: {
          base: "text-base xs:text-lg md:text-xl font-light inline-block bg-gradient-to-r from-secondary to-pink-500 bg-clip-text",
        },
      },
    },
  },
};
