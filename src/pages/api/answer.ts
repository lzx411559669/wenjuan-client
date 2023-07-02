import { get } from "@/services/ajax";
import { postAnswer } from "@/services/answer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log("method", req.method)
    if (req.method !== "POST") {
        res.status(200).json({ success: false });
    }
    console.log(req.body)
    const answerInfo = getAnswerInfo(req.body)
    console.log(answerInfo)
    try {
        const resData = await postAnswer(answerInfo)
        //如果提交失败
        if (!resData.success) {
            res.redirect("/error")
        } else {
            res.redirect('/success')
        }

    } catch (error) {
        console.log(error)
    }
    res.redirect("/success")
}

function getAnswerInfo(body: any) {
    const answerList = Object.keys(body).filter(key => key !== "questionId").map(key => {
        return {
            componentId: key,
            value: body[key]
        }
    })
    return {
        questionId: body.questionId,
        answerList
    }

}