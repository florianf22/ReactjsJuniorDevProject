// GENERATED BY HAND. YOU CAN MODIFY IT
// :-)

import { gql } from '@apollo/client';

export const PRODUCTS = gql`
  query Products {
    category {
      name
      products {
        id
        name
        inStock
        gallery
        category
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const CURRENCIES = gql`
  query Currencies {
    currencies {
      label
      symbol
    }
  }
`;

// not using fragments
export const PRODUCT = gql`
  query Product($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
`;
