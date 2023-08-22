import { useQuery } from "@tanstack/react-query";
import api from "../../util/api";
import { teacherType } from "../../@types/types";

const fetchData = async (id: string): Promise<teacherType[]> => {
    const response = await api.get<teacherType[]>("/professor?instituicao="+id);
    return response.data;
};

export function useTeachersData(id: string) {
    const query = useQuery({
        queryFn: () => fetchData(id),
        queryKey: ["teachers-data", id]
    });

    return {
        ...query,
        data: query.data
    };
}