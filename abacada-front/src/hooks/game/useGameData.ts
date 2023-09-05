import { useQuery } from "@tanstack/react-query";
import api from "../../util/api";
import { gameType } from "../../@types/types";
import { useEffect } from "react";

const fetchData = async (id: string): Promise<gameType> => {
    const response = await api.get<gameType>("/jogo/"+id);
    return response.data;
};

export function useGameData(id: string) {
    const query = useQuery({
        queryFn: () => fetchData(id),
        queryKey: ["game-data"],
        enabled: !!id
    });

    useEffect(() => {
        query.refetch();
    }, [id]);

    return {
        ...query,
        data: query.data
    };
}