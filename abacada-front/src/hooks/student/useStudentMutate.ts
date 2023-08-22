import { useMutation, useQueryClient } from "@tanstack/react-query";
import { studentRequest } from "../../@types/types";
import api from "../../util/api";

const postData = async (data: studentRequest) => {
  return await api.post("/aluno", data);
};

export function useStudentMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries(["students-data"]);
    }
  });

  return mutate;
}