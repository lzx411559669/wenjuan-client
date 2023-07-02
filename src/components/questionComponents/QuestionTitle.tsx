interface IQuestionTitleProps {
  text: string;
  level: 1 | 2 | 3 | 4 | 5;
  isCenter: boolean;
}
export default  function QuestionTitle({ text, level, isCenter }: IQuestionTitleProps) {
  return (
    <>
      <div
        className={`text-[${26 - level * 2}px] font-bold ${
          isCenter ? "text-center" : ""
        }`}
      >
        {text}
      </div>
    </>
  );
}
