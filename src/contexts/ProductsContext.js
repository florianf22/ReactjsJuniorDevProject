import React, { Component } from 'react';
import { useQuery } from '@apollo/client';

import { PRODUCTS } from '../graphql/Queries';
import makeHOC from '../makeHOC';

const injectProductsQuery = makeHOC(useQuery, 'query', props => [PRODUCTS]);

const Context = React.createContext();

export const ProductsStore = injectProductsQuery(
  class ProductsStore extends Component {
    // onCategoryChange = category => {
    //   this.setState({ selectedCategory: category });
    // };

    render() {
      const { data, loading, error } = this.props.query;

      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <Context.Provider value={data}>{this.props.children}</Context.Provider>
      );
    }
  },
);

export default Context;
