import * as React from "react";

interface IQuestionRadioProps {
  fe_id: string;
  props: {
    title: string;
    options: Array<{
      value: string;
      text: string;
    }>;
    value: string;
    isVertical: string;
  };
}

const QuestionRadio: React.FunctionComponent<IQuestionRadioProps> = ({
  fe_id,
  props,
}) => {
  const { title, options, value, isVertical } = props;

  return (
    <>
      <div>{title}</div>
      <input type="radio"></input>
      <ul>
        {options.map((opt) => {
          const { value: val, text } = opt;
          return (
            <li key={val}>
              <label>
                <input
                  type="radio"
                  name={fe_id}
                  value={val}
                  defaultChecked={val === value}
                ></input>
                {text}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuestionRadio;
