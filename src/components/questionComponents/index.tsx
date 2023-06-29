import QuestionInput from "./QuestionInput";
import QuestionRadio from "./QuestionRadio";

type ComponentInfoType = {
  fe_id: string;
  type: string;
  isHidden: boolean;
  props: any;
};

export const getComponent = (com: ComponentInfoType) => {
  const { fe_id, type, isHidden, props = {} } = com;

  if (isHidden) return null;
  if (type === "questionInput") {
    return <QuestionInput fe_id={fe_id} props={props} />;
  }

  if (type === "questionRadio") {
    return <QuestionRadio fe_id={fe_id} props={props}></QuestionRadio>;
  }

  return null;
};
