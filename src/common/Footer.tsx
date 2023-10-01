import React from "react";

type FooterProps = React.HTMLAttributes<HTMLDivElement>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer
      {...props}
      className="w-full h-12 bg-white/10 flex items-center justify-center"
    >
      Footer
    </footer>
  );
};

export default Footer;
