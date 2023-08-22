import { useMutation, useQueryClient } from "@tanstack/react-query";
import { teacherRequest } from "../../@types/types";
import api from "../../util/api";

const postData = async (data: teacherRequest) => {
    return await api.post("/professor", data);
};

export function useTeacherMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries(["teachers-data"]);
    }
  });

  return mutate;
}