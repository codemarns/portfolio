import classNames from "classnames";
import { Container, Icon, Section, Title } from "../../components";
import { experiencesStyles } from "../../styles";
import { data } from "./data";

export const Experiences = () => {
  const id = "experiences";
  const { root } = experiencesStyles;

  return (
    <Section id={id} className={root.base}>
      <Container id={id + "_container"}>
        <Title name="Experiences" />

        <div className="relative pb-20 pt-8">
          <div className="absolute left-1/2 sm:left-8 lg:left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#1c0f28] duration-300 ease-in-out transition-all">
            <div className="absolute -left-[calc(2rem-2px)] -top-1 w-16 h-16 flex items-center justify-center rounded-full bg-secondary outline outline-[1rem] outline-secondary/10">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <Icon name={'trophy'} color="white" className="text-3xl drop-shadow " />
            </div>
          </div>
          {/* <div className="h-[150px] bg-warning/10 relative flex justify-start lg:justify-center duration-300 ease-in-out transition-all">
            <div className="w-16 h-16 rounded-full bg-secondary"></div>
          </div> */}
          <div className="relative grid grid-cols-1 gap-10 pt-28">
            {data.map((e) => (
              <div
                key={e.id}
                className={classNames(
                  "ITEM min-h-[200px]",
                  "grid grid-cols-1 lg:grid-cols-2",
                  "duration-300 ease-in-out transition-all"
                  // "even:pl-[calc(50%+3rem)]",
                  // "odd:pr-[calc(50%+3rem)]"
                )}
              >
                <div className="py-0 sm:py-8 pl-0 sm:pl-16 lg:pl-8 pr-0 sm:pr-8 duration-300 ease-in-out transition-all">
                  <div
                    className={classNames(
                      "relative h-full p-8 grid grid-cols-1 gap-5 text-left bg-[#1c0f28] rounded-xl shadow-lg"
                      // "even:row-start-2"
                    )}
                  >
                    <div className="grid grid-cols-1 gap-1">
                      <span className="text-default-300 font-light">
                        {e.job_start + " - " + e.job_end}
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-lg font-bold text-secondary">
                          {e.company_name}
                        </span>
                        {e.receive_awards && (
                          <Icon
                            name="diamond"
                            title="Received Certificate of Appreciation"
                            className="text-xl text-pink-500"
                          />
                        )}
                      </div>
                      <span
                        className="text-lg bg-gradient-to-r from-secondary to-pink-500 bg-clip-text"
                        style={{ WebkitTextFillColor: "transparent" }}
                      >
                        {e.job_position}
                      </span>
                    </div>
                    <ul className="pl-6 space-y-2.5">
                      {e.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility.id}
                          className="relative before:content-[''] before:absolute before:-left-6 before:top-[9px] before:w-2 before:h-2 before:rounded-full before:bg-secondary"
                        >
                          <p>{responsibility.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* {data.map((company) => (
              <div key={company.id} id={company.id} className="grid grid-cols-1 gap-10">
                <div>
                  <div className="inline-block min-w-fit px-6 py-4 bg-[#1c0f28] rounded-xl shadow-lg">
                    <p className="text-lg font-bold text-secondary">
                      {company.name}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-10">
                  {company.experiences.map((experience) => (
                    <div
                      key={experience.id}
                      className={cn(
                        "ITEM min-h-[200px]",
                        company.id === "litecloud-corporation"
                          ? "even:pr-[calc(50%+4rem)] odd:pl-[calc(50%+4rem)]"
                          : "even:pl-[calc(50%+4rem)] odd:pr-[calc(50%+4rem)]"
                      )}
                    >
                      <div className="relative h-full p-8 grid grid-cols-1 gap-5 text-left bg-[#1c0f28] rounded-xl shadow-lg">
                        <span className="text-default-300 text-sm font-light">
                          {experience.start + " - " + experience.end}
                        </span>
                        <span
                          className="text-lg bg-gradient-to-r from-secondary to-pink-500 bg-clip-text"
                          style={{ WebkitTextFillColor: "transparent" }}
                        >
                          {experience.position}
                        </span>
                        <ul className="pl-6 space-y-2.5">
                          {experience.responsibilities.map((responsibility) => (
                            <li
                              key={responsibility.id}
                              className="relative before:content-[''] before:absolute before:-left-6 before:top-[9px] before:w-2 before:h-2 before:rounded-full before:bg-secondary"
                            >
                              <p>{responsibility.description}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))} */}
          </div>

          {/* {data.map((company) => (
            <div
              key={company.id}
              className="min-h-[200px] grid grid-cols-[1fr,_4px,_1fr]"
            >
              <div />
              <div className="bg-secondary-800 relative">
                <div className="absolute top-8 -left-3 w-7 h-7 rounded-full bg-secondary outline outline-[7px] outline-secondary/20" />
              </div>
              <div className="px-10 py-8">
                <div className="h-full space-y-6 text-left">
                  <div>
                    <p className="text-lg font-bold text-secondary">
                      {company.name}
                    </p>
                    <p className="text-sm font-light text-default">
                      {company.address}
                    </p>
                  </div>
                  <div className="space-y-6">
                    {company.experiences.map((experience) => (
                      <div key={experience.id} className="space-y-6">
                        <div>
                          <span className="text-secondary-700">
                            {experience.position}
                          </span>
                          <div className="text-sm font-light text-default">
                            <span>{experience.start}</span>
                            {" - "}
                            <span>{experience.end}</span>
                          </div>
                        </div>
                        <ul className="p-4 bg-gradient-to-br from-[#B84CD6]/30 to-secondary/30 backdrop-blur-lg rounded-xl text-default-100">
                          {experience.responsibilities.map((responsibility) => (
                            <li key={responsibility.id}>
                              <p>- {responsibility.description}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </Container>
    </Section>
  );
};
