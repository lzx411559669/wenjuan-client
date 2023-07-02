import * as React from "react";

interface IQuestionRadioProps {
  fe_id: string;
  props: {
    title: string;
    options: Array<{
      value: string;
      label: string;
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
      <div className={isVertical ? "flex flex-col" : "flex"}>
        {options.map((opt) => {
          const { value: val, label } = opt;
          return (
            <div key={val} className="flex items-center mt-2 mx-1">
              <label>
                <div className="flex">
                  <input
                    type="radio"
                    name={fe_id}
                    className="radio"
                    value={val}
                    defaultChecked={val === value}
                  ></input>
                  <p className="ml-4 mb-2 inline-block">{label}</p>
                </div>
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default QuestionRadio;
