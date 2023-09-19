import { useQuery } from "@tanstack/react-query";
import api from "../../util/api";
import { gameType } from "../../@types/types";
import { useEffect } from "react";

const fetchData = async (vogal?: string, estagio?: string): Promise<gameType[]> => {
    const response = await api.get<gameType[]>("/jogo/recomendados?vogal="+vogal+"&estagio="+estagio);
    return response.data;
};

export function useGamesRecommendedData(vogal?: string, estagio?: string) {
    const query = useQuery({
        queryFn: () => fetchData(vogal, estagio),
        queryKey: ["games-data"],
        enabled: !!vogal && !!estagio
    });

    useEffect(() => {
        query.refetch();
    }, [vogal, estagio]);

    return {
        ...query,
        data: query.data
    };
}