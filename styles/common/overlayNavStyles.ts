export const overlayNavStyles = {
  root: {
    base: "fixed inset-0 z-20 h-full w-full p-8 bg-black/90 flex flex-col items-center justify-center gap-4 ease-in-out duration-500 transition-all",
    position: {
      display: "!left-0 visible opacity-100",
      hide: "!left-full invisible opacity-0",
    },
  },
  ul: {
    base: "w-full max-w-sm mx-auto p-4 space-y-4",
    li: {
      base: "list-none flex items-center justify-center",
      link: {
        base: "uppercase text-2xl font-extralight tracking-wide px-4 py-2 hover:text-secondary common-transition",
      },
    },
  },
};
