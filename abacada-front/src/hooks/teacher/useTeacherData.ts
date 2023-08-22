import { useQuery } from "@tanstack/react-query";
import api from "../../util/api";
import { teacherType } from "../../@types/types";

const fetchData = async (id: string): Promise<teacherType> => {
    const response = await api.get<teacherType>("/professor/"+id);
    return response.data;
};

export function useTeacherData(id: string) {
    const query = useQuery({
        queryFn:() => fetchData(id),
        queryKey: ["teacher-data", id]
    });

    return {
        ...query,
        data: query.data
    };
}