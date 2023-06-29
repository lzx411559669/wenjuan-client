import * as React from "react";

interface IQuestionInputProps {
  fe_id: string;
  props: {
    title: string;
    placeholder?: string;
  };
}

const QuestionInput: React.FunctionComponent<IQuestionInputProps> = ({
  fe_id,
  props,
}) => {
  const { title, placeholder = "" } = props;
  return (
    <>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base">{title}</span>
          </label>
          <input type="text"  name={fe_id} placeholder={placeholder} className="input input-bordered" />
        </div>
      <div></div>
    </>
  );
};

export default QuestionInput;
