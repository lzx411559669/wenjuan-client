import QuestionCheckbox from "./QuestionCheckbox";
import QuestionInput from "./QuestionInput";
import QuestionParagraph from "./QuestionParagraph";
import QuestionRadio from "./QuestionRadio";
import QuestionTextArea from "./QuestionTextArea";
import QuestionTitle from "./QuestionTitle";

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

  if (type === "questionTitle") {
    return <QuestionTitle {...props}></QuestionTitle>;
  }
  if (type === "questionParagraph") {
    return <QuestionParagraph {...props}></QuestionParagraph>;
  }
  if (type === "questionTextarea") {
    return <QuestionTextArea fe_id={fe_id} props={props}></QuestionTextArea>;
  }
  if (type === "questionCheckbox") {
    return <QuestionCheckbox fe_id={fe_id} props={props}></QuestionCheckbox>;
  }

  return null;
};
