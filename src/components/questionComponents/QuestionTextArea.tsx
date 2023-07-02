import React from "react";

type Props = {
  fe_id: string;
  props: {
    title: string;
    placeholder?: string;
  };
};

export default function QuestionTextArea({ fe_id, props }: Props) {
  const { title, placeholder = "" } = props;
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-base">{title}</span>
        </label>
        <textarea
          name={fe_id}
          placeholder={placeholder}
          className="textarea textarea-primary"
        />
      </div>
      <div></div>
    </>
  );
}
