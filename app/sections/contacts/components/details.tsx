"use client";

import { FC } from "react";
import { Icon } from "@/components/icon";
import { contactsStyles } from "@/styles";
import { DetailProps } from "../types";

type Props = {
  data: DetailProps;
};

export const Details: FC<Props> = ({ data }) => {
  const { heading, text, contacts } = data;
  const { details } = contactsStyles;
  return (
    <div className={details.base}>
      <h2 className={details.heading.base}>
        {heading[0]}
        <br />
        {heading[1]}
      </h2>

      <p className={details.quote.base}>{text}</p>

      <div className={details.contacts.base}>
        <span className={details.contacts.title.base}>Follow Me</span>
        <ul className={details.contacts.ul.base}>
          {contacts.map((e) => (
            <li key={e.id} className={details.contacts.ul.list.base}>
              <Icon
                name={e.icon}
                color="secondary"
                className={details.contacts.ul.list.icon}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
