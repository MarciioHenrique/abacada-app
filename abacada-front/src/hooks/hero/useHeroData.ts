import { useQuery } from "@tanstack/react-query";
import api from "../../util/api";
import { heroType } from "../../@types/types";

const fetchData = async (id: string): Promise<heroType> => {
    const response = await api.get<heroType>("/heroi/"+id);
    return response.data;
};

export function useHeroData(id: string) {
    const query = useQuery({
        queryFn: () => fetchData(id),
        queryKey: ["hero-data", id],
        enabled: !!id
    });

    return {
        ...query,
        data: query.data
    };
}