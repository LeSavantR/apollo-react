import { gql } from "@apollo/client";

export const ALL_PERSONS = gql`
query {
  allPersons {
    id
    name
    phone
    address {
      street
      city
    }
  }
}
`;

export const FIND_PERSON = gql`
query findPersonByName($name: String!) {
  findPerson(name: $name) {
    id
    name
    phone
    address {
      city
      street
    }
  }
}
`;