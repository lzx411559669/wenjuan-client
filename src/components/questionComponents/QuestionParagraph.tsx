import React from "react";

type Props = {
  text: string;
  isCenter?: boolean;
};

const baseClass = "whitespace-pre-wrap font-sm";

export default function QuestionParagraph({ text, isCenter }: Props) {
  return (
    <p className={isCenter ? "text-center " + baseClass : baseClass}>{text}</p>
  );
}
