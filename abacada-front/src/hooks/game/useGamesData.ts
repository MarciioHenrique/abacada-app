import { useQuery } from "@tanstack/react-query";
import api from "../../util/api";
import { gameType } from "../../@types/types";

const fetchData = async (): Promise<gameType[]> => {
    const response = await api.get<gameType[]>("/jogo");
    return response.data;
};

export function useGamesData() {
    const query = useQuery({
        queryFn: () => fetchData(),
        queryKey: ["games-data"]
    });

    return {
        ...query,
        data: query.data
    };
}