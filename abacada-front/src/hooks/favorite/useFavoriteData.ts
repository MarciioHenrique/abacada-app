import { useQuery } from "@tanstack/react-query";
import api from "../../util/api";
import { favoriteType } from "../../@types/types";

const fetchData = async (id: string): Promise<favoriteType[]> => {
    const response = await api.get<favoriteType[]>("/favorito?registro="+id);
    return response.data;
};

export function useFavoriteData(id: string) {
    const query = useQuery({
        queryFn:() => fetchData(id),
        queryKey: ["favorite-data", id],
        
    });

    return {
        ...query,
        data: query.data
    };
}