import { api } from "@/utils/api";

export async function getPosts() {
    const response = await api.get('/posts');
    return response.data;
}
