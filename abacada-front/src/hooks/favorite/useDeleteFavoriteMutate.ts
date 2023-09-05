import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../util/api";

const deleteData = async (id: string) => {
    console.log("deletando id " + id + "...");
    return await api.delete("/favorito?id=" + id);
};

export function useDeleteFavoriteMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: deleteData,
        onSuccess: () => {
            console.log("Favorite deleted");
            queryClient.invalidateQueries(["favorite-data"]);
        }
    });

    return mutate;
}