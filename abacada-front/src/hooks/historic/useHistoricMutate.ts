import { useMutation } from "@tanstack/react-query";
import { historicRequest } from "../../@types/types";
import api from "../../util/api";

const postData = async (data: historicRequest) => {
    return await api.post("/historico", data);
};

export function useHistoricMutate() {
    const mutate = useMutation({
        mutationFn: postData
    });

    return mutate;
}