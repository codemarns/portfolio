export const contactsStyles = {
  root: {
    base: "bg-gradient-to-b from-darker to-transparent",
  },
  content: {
    base: "grid grid-cols-1 lg:grid-cols-[1fr,_450px] gap-12",
  },
  details: {
    base: "text-left space-y-10",
    heading: {
      base: "text-3xl xs:text-4xl md:text-6xl font-bold leading-tight",
    },
    quote: {
      base: "text-default-200 text-base leading-7 xs:text-lg xs:leading-8 md:text-xl md:leading-9",
    },
    contacts: {
      base: "space-y-2 md:space-y-4 lg:!mt-20 lg:!mb-10",
      title: {
        base: "text-xl font-bold",
      },
      ul: {
        base: "flex items-center gap-4",
        list: {
          base: "flex items-center gap-4 p-2 bg-darker rounded-md",
          icon: "text-3xl",
          label: "break-all",
        },
      },
    },
  },
  form: {
    wrapper: "",
    base: "grid grid-cols-1 gap-8 px-4 xs:px-8 py-12 bg-darker rounded-xl shadow-xl",
    heading: {
      base: "text-2xl text-secondary font-normal",
    },
    field: {
      base: "outline-none px-4 bg-transparent border border-default-400 hover:border-secondary focus:border-secondary focus:outline focus:outline-4 focus:outline-secondary/10 rounded-md duration-150 ease-in-out transition-all",
      input: "h-12",
      textarea: "h-auto py-2",
    },
  },
};
