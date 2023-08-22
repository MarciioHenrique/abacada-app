import { useQuery } from "@tanstack/react-query";
import api from "../../util/api";
import { historicType } from "../../@types/types";

const fetchData = async (id: string): Promise<historicType[]> => {
    const response = await api.get<historicType[]>("/historico?registro="+id);
    return response.data.reverse();
};

export function useHistoricData(id: string) {
    const query = useQuery({
        queryFn:() => fetchData(id),
        queryKey: ["historic-data", id]
    });

    return {
        ...query,
        data: query.data
    };
}