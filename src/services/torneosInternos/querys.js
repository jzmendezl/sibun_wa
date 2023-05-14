import { gql } from '@apollo/client'

export const PING = gql`
query Query {
  ping
}
`

export const GET_TORNEOS_INTERNOS = gql`
query GetAllUsers {
  getAllUsers {
    id
    email
  }
}
`