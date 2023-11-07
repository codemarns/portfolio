export const skillsStyles = {
  root: {
    base: "h-auto w-full px-8 py-16 lg:py-20 bg-secondary-900/50",
  },
  container: {
    base: "w-full max-w-[1280px] mx-auto text-center space-y-16",
  },
  title: {
    base: "inline-block relative text-secondary text-3xl md:text-5xl font-bold before:content-[''] before:absolute before:-bottom-6 before:left-1/2 before:transform before:-translate-x-1/2 before:h-1.5 before:w-16 before:bg-pink-500 before:rounded-full",
  },
  content: {
    skills: {
      hard: {
        list: {
          base: "grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-12",
          item: {
            base: "space-y-2",
            content: {
              base: "flex items-center justify-between",
              name: "leading-none font-normal",
              level:
                "leading-none font-thin italic text-sm text-secondary-100 tracking-wider",
            },
            ratings: {
              base: "h-1.5 w-full grid grid-cols-5 gap-1.5",
              rating: {
                base: "h-1.5 transform -skew-x-12",
                color: {
                  1: "bg-secondary",
                  2: "bg-[#B84CD6]",
                  3: "bg-[#C94BC2]",
                  4: "bg-[#DA4AAE]",
                  5: "bg-[#EC4899]",
                },
              },
              no_rating:
                "h-1.5 bg-transparent border border-secondary-800 transform -skew-x-12",
            },
          },
        },
      },
      others: {},
      soft: {
        list: {
          base: "grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-x-12 gap-y-4",
          item: {
            base: "grid grid-cols-[auto,_1fr] gap-3 items-center",
            icon: "text-2xl",
            name: "text-left capitalize",
          },
        },
      },
    },
  },
};
