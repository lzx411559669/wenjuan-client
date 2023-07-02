import React, { useEffect, useState } from "react";

type Props = {
  fe_id: string;
  props: {
    title: string;
    isVertical?: boolean;
    options: Array<{
      value: string;
      label: string;
      checked: boolean;
    }>;
  };
};

export default function QuestionCheckbox({ fe_id, props }: Props) {
  const { title, isVertical, options } = props;
  const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    const initValues = options
      .filter((item) => item.checked)
      .map((item) => item.value);
    setValues(initValues);
  }, [options]);

  const troggleChange = (value: string) => {
    if (values.includes(value)) {
      setValues(values.filter((item) => item !== value));
    } else {
      setValues([...values, value]);
    }
  };
  return (
    <>
      <div>{title}</div>
      <div className={isVertical ? "flex flex-row " : ""}>
        {options.map((item) => {
          const { value, label, checked } = item;
          return (
            <div key={label} className="mr-1">
              <div>
                <label className="label cursor-pointer">
                  <span className="label-text mr-2">{label}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    onChange={() => troggleChange(value)}
                    checked={values.includes(value)}
                  />
                </label>
              </div>
            </div>
          );
        })}
      </div>
      <input hidden name={fe_id} defaultValue={values.join(",")}></input>
    </>
  );
}
