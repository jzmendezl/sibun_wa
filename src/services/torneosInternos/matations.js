import { gql } from "@apollo/client";


export const SIGNIN = gql`
mutation LoginUser($password: String!, $email: String!) {
  loginUser(password: $password, email: $email) {
    token
  }
}
`