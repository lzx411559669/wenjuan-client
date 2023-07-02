import { get } from "./ajax"

export async function queryQuestion(id: string) {
    const url = `/api/question/${id}`
    const res = await get(url)
    return res.data
}