"use client";

import { FC } from "react";
import { Icon } from "@/components/icon";
import { Title } from "@/components/title";
import { Section } from "@/common/section";
import { Container } from "@/common/container";
import { experiencesStyles } from "@/styles";
import { ExperienceProps } from "./types";

export const Experiences: FC<ExperienceProps> = (props) => {
  const { id, title, content: pageContent } = props;
  const { root, content, trophy, experiences } = experiencesStyles;

  return (
    <Section id={id} className={root.base}>
      <Container id={id + "-container"}>
        <Title name={title} />

        <div className={content.base}>
          <div className={trophy.rope.base}>
            <div className={trophy.circle.base}>
              <div className={trophy.ping.base} />
              <Icon
                name={"trophy"}
                color="white"
                className={trophy.icon.base}
              />
            </div>
          </div>

          <div className={experiences.base}>
            {pageContent.experiences.map((e) => (
              <div key={e.id} className={experiences.row.base}>
                <div className={experiences.slot.base}>
                  <div className={experiences.container.base}>
                    <div className={experiences.info.base}>
                      <span className={experiences.info.daterange.base}>
                        {e.job_start + " - " + e.job_end}
                      </span>
                      <span className={experiences.info.company.base}>
                        {e.company_name}
                      </span>
                      <span className={experiences.info.position.base}>
                        {e.job_position}
                      </span>
                    </div>

                    {e.awards.label !== "" && (
                      <div className={experiences.award.base}>
                        <Icon
                          name="diamond"
                          title={e.awards.label}
                          className={experiences.award.icon.base}
                        />
                        <span className={experiences.award.label.base}>
                          {e.awards.label}
                        </span>
                      </div>
                    )}

                    <ul className={experiences.responsibility.base}>
                      {e.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility.id}
                          className={experiences.responsibility.list.base}
                        >
                          <p>{responsibility.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
