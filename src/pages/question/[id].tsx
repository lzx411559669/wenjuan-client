import { getComponent } from "@/components/questionComponents";
import QuestionInput from "@/components/questionComponents/QuestionInput";
import { queryQuestion } from "@/services/question";
type QuestoinType = {
  id: string;
  data: {
    id: string;
    title: string;
    js?: string;
    css?: string;
    desc?: string;
    componentList: Array<{
      fe_id: string;
      type: string;
      title: string;
      isHidden: boolean;
      isLocked: boolean;
      props: {
        text: string;
        level: number;
        isCenter: boolean;
      };
    }>;
  };
  message?: string;
};

export default function Question(props: QuestoinType) {
  const { data } = props;
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="w-full px-4">
          <h1 className=" text-center text-lg font-bold">{data.title}</h1>
          {data.desc && <p className=" text-center my-2">{data.desc}</p>}
          <form className="w-full " method="post" action={"/api/answer"}>
            <input
              type="hidden"
              name="questionId"
              defaultValue={props.id}
            ></input>
            {data.componentList.map((com) => {
              return (
                <div className="my-4" key={com.fe_id}>
                  {getComponent(com)}
                </div>
              );
            })}

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                提交
              </button>
            </div>
          </form>
        </div>

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
  const res = await queryQuestion(id);
  return {
    props: {
      id,
      data: res,
    },
  };
}
