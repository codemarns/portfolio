import { Button } from "../../components";
import { heroStyles } from "../../styles";

export const Hero = () => {
  const { root, container, column } = heroStyles;

  return (
    <section id="hero" className={root.base}>
      <div id="hero-container" className={container.base}>
        <div className={column.left.base}>
          <div className={column.left.image.wraper}>
            <img
              src="marnien-cueba.png"
              alt="Marnien Cueba Photo"
              className={column.left.image.base}
            />
          </div>
        </div>

        <div className={column.right.base}>
          <div className={column.right.details.base}>
            <span className={column.right.details.greet.base}>Hi, I am</span>
            <h1 className={column.right.details.name.base}>Marnien Cueba</h1>
            <p
              className={column.right.details.title.base}
              style={{ WebkitTextFillColor: "transparent" }}
            >
              UI/UX Designer and Frontend Developer
            </p>
          </div>
          <Button
            size="xl"
            label="Hire Me"
            color="secondary"
            corner="rounded"
          />
        </div>
      </div>
    </section>
  );
};
