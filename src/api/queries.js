import { gql } from "@apollo/client";

export const CATEGORY_PRODUCTS = gql`
  {
    category(input: { title: "all" }) {
      name
      products {
        name
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  {
    categories {
      name
    }
  }
`;
