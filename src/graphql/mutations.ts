import { gql } from "@apollo/client";

export const CREATE_PERSON = gql`
mutation createPerson($name: String!, $phone: String, $street: String!, $city: String!) {
  addPerson(
    name: $name
    phone: $phone
    city: $city
    street: $street
  ) {
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

export const EDIT_NUMBER = gql`
mutation editPhone($id: ID!, $phone: String!) {
  editPhone(id: $id, phone: $phone) {
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

export const LOGIN = gql`
mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    value
  }
}
`;