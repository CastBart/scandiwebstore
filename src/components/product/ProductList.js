import React, { Component } from "react";
import { Query } from '@apollo/client/react/components';
import { CATEGORY_PRODUCTS } from "../../api/queries";

class ProductList extends Component {
  
  render() {
    return (
      <>
        <h2>Product List</h2>
        <Query query={CATEGORY_PRODUCTS}>{({loading, error, data})=>{
            if(loading) return "loading...";
            if(error) return `Error! ${error.message}`
            console.log(data)
            return(
                <div>{data.category.products.map(product =>{
                    
                    return <p>{product.name}</p>
                })}</div>
            )
        }}</Query>
      </>
    );
  }
}

export default ProductList;
