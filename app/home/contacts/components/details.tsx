"use client";

import { FC } from "react";
import { Icon } from "@/app/components/Icon";
import { contactsStyles } from "@/app/styles";
import { DetailProps } from "../types";
import Link from "next/link";

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
            <Link
              key={e.id}
              href={e.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <li className={details.contacts.ul.list.base}>
                <Icon
                  name={e.icon}
                  color="secondary"
                  className={details.contacts.ul.list.icon}
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
