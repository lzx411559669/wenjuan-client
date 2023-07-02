import { post } from "./ajax";

export async function  postAnswer(data:any) { 
    const res = await post('/api/postAnswer', data);
    return res
}