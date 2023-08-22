import { useQuery } from "@tanstack/react-query";
import api from "../../util/api";
import { studentType } from "../../@types/types";

const fetchData = async (id: string): Promise<studentType[]> => {
    const response = await api.get<studentType[]>("/aluno?registroProfessor="+id);
    return response.data;
};

export function useStudentsData(id: string) {
    const query = useQuery({
        queryFn:() => fetchData(id),
        queryKey: ["students-data", id]
    });

    return {
        ...query,
        data: query.data
    };
}