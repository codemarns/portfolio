import { useEffect, useState } from "react";
import { Button } from ".";

export const ScrollToTop = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!scroll) return null;

  return (
    <Button
      size="xl"
      icon="arrow-up"
      corner="rounded"
      color="secondary"
      className="fixed bottom-4 hover:bottom-5 right-4 z-10"
      onClick={scrollToTop}
    />
  );
};
