export const heroStyles = {
  root: {
    base: "h-[99vh] lg:h-fit w-full px-8 py-16 lg:py-20 flex items-center justify-center bg-gradient-to-b from-default-950 to-secondary-900/50",
  },
  container: {
    base: "h-fit w-full max-w-[1280px] mx-auto lg:px-8 lg:py-20 grid grid-cols-1 lg:grid-cols-[1fr,_552px] xl:grid-cols-2 gap-0 lg:gap-12 items-center duration-300 ease-out transition-all",
  },
  column: {
    left: {
      base: "p-8 flex items-center justify-center", // lg:justify-end
      image: {
        base: "relative aspect-square xs:aspect-auto w-[100%] h-auto xs:w-[235px] xs:h-[235px] md:w-[285px] md:h-[285px] lg:w-[235px] lg:h-[235px] xl:w-[285px] xl:h-[285px] bg-secondary rounded-full",
        wraper: //  before:bg-secondary/[0.025]
          "relative w-full xs:w-auto inline-flex items-center justify-center p-[10%] xs:p-6 md:p-8 rounded-full before:content-[''] before:animate-[wiggle_2.5s_ease-in-out_infinite] before:absolute before:inset-4 before:bg-secondary/[0.075] before:rounded-full after:content-[''] after:animate-ping after:absolute after:inset-16 after:-z-[1] after:bg-secondary/[0.7] after:rounded-full duration-300 ease-out transition-all",
        // adasdd:
        //   "relative w-full xs:w-auto inline-flex items-center justify-center p-[10%] xs:p-6 md:p-8 bg-secondary/[0.075] rounded-full before:content=[''] before:animate-ping before:absolute before:inline-flex before:h-[75%] before:w-[75%] before:rounded-full before:bg-secondary/[0.075] duration-300 ease-out transition-all",
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
