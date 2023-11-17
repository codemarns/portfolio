import { Button, Image } from "../../components";
import { heroStyles } from "../../styles";

export const Hero = () => {
  const { root, container, column } = heroStyles;

  return (
    <header id="hero" className={root.base}>
      <div id="hero-container" className={container.base}>
        <div className={column.left.base}>
          <Image
            width="350px"
            corner="rounded"
            aspectRatio="1:1"
            thumbnail={""}
            src={"marnien-cueba.png"}
            alt={"marnien cueba profile"}
            className={column.left.image.base}
          />
        </div>

        <div className={column.right.base}>
          <div className={column.right.details.base}>
            <span className={column.right.details.greet.base}>Hi, I am</span>
            <h1 className={column.right.details.name.base}>Marnien Cueba</h1>
            <p
              className={column.right.details.title.base}
              style={{ WebkitTextFillColor: "transparent" }}
            >
              UI/UX and Frontend Developer
            </p>
          </div>
          <a href="#contacts" className="inline-block">
            <Button
              size="xl"
              label="Hire Me"
              color="secondary"
              corner="rounded"
            />
          </a>
        </div>
      </div>
    </header>
  );
};
