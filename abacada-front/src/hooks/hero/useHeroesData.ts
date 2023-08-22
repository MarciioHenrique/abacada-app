import { useQuery } from "@tanstack/react-query";
import api from "../../util/api";
import { heroType } from "../../@types/types";

const fetchData = async (): Promise<heroType[]> => {
    const response = await api.get<heroType[]>("/heroi");
    return response.data;
};

export function useHeroesData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ["heroes-data"]
    });

    return {
        ...query,
        data: query.data
    };
}