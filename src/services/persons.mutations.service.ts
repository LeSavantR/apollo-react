import { useMutation } from "@apollo/client";
import { CREATE_PERSON, EDIT_NUMBER } from "../graphql/mutations";
import { ALL_PERSONS } from "../graphql/queries";

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