import { api } from "@/utils/api";

export async function getImages(limit: number = 15) {
    const response = await api.get('/photos', {
        params: {
            _limit: limit,
        }
    });
    return response.data;
}
