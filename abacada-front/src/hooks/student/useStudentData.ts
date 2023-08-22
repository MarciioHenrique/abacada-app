import { useQuery } from "@tanstack/react-query";
import api from "../../util/api";
import { studentType } from "../../@types/types";
import { useEffect } from "react";

const fetchData = async (id?: string): Promise<studentType> => {
    const response = await api.get<studentType>("/aluno/"+id);
    return response.data;
};

export function useStudentData(id?: string) {
    const query = useQuery({
        queryFn:() => fetchData(id),
        queryKey: ["student-data", id],
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