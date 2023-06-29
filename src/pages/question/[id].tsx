import QuestionInput from "@/components/questionComponents/QuestionInput";
type QuestoinType = {
  id: string;
};

export default function Question(props: QuestoinType) {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <form className="w-full px-4" method="post" action={"/api/answer"}>
          <input
            type="hidden"
            name="questionId"
            defaultValue={props.id}
          ></input>
          <QuestionInput
            fe_id="xx"
            props={{ title: "你的姓名" }}
          ></QuestionInput>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              提交
            </button>
          </div>
        </form>
        {/* <div className="hero-content flex-col w-full lg:flex-row-reverse">
          <div className="card  flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <div className="card-body">
              
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { id = "" } = context.params;
  return {
    props: {
      id,
    },
  };
}
