import { ALL_PERSONS, CREATE_PERSON, EDIT_NUMBER } from "@/graphql";
import { useMutation } from "@apollo/client";

export const useCreatePerson = (notifyError: FunctionStringCallback) => {
  const results = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
    onError: (error) => {notifyError(error.graphQLErrors[0].message)}
  });
  return results;
};

export const useUpdatePhone = (notifyError: FunctionStringCallback) => {
  const results = useMutation(EDIT_NUMBER, {
    refetchQueries: [{ query: ALL_PERSONS }],
    onError: (error) => {notifyError(error.graphQLErrors[0].message)}
  })
  return results
};