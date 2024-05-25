type CommonSkillProps = {
  id: string;
  name: string;
}

type HardSkills = CommonSkillProps & {
  level: string;
  ratings: number;
};

type Data = {
  hard: HardSkills[];
  soft: CommonSkillProps[];
  others: CommonSkillProps[];
};

type ContentProps = {
  skills: Data;
}

export type SkillsProps = {
  id: string;
  title: string;
  content: ContentProps;
};
