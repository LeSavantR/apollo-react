import { useLazyQuery, useQuery } from "@apollo/client";
import { ALL_PERSONS, FIND_PERSON } from "../graphql/queries";

export const usePersons = () => {
  const results = useQuery(ALL_PERSONS);
  return results;
};

export const useFindPerson = () => {
  const results = useLazyQuery(FIND_PERSON)
  return results
};