import { useMutation, useQueryClient } from "@tanstack/react-query";
import { favoriteRequest } from "../../@types/types";
import api from "../../util/api";

const postData = async (data: favoriteRequest) => {
    return await api.post("/favorito", data);
};

export function useFavoriteMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        onSuccess: () => {
            console.log("Favorite added");
            queryClient.invalidateQueries(["favorite-data"]);
        }
    });

    return mutate;
}