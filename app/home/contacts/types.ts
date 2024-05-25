export type FormProps = {};

type ContactProps = {
  id: string;
  icon: string;
  link: string;
};

export type DetailProps = {
  heading: string[];
  text: string;
  contacts: ContactProps[];
};

type ContentProps = {
  details: DetailProps;
  form: FormProps;
};

export type ContactsProps = {
  id: string;
  title: string;
  content: ContentProps;
};
