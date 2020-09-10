import React from 'react';
import { Link } from "react-router-dom";

class Products extends React.Component {
  
  componentDidMount() {
    alert(this.props.match.params.id);
  }

  render() {

    return(
      <div>
        Products
        <Link to="/products/2">
          product 2
        </Link>
        <Link to="/products/3">
          product 3
        </Link>
        <Link to="/products/4">
          product 4
        </Link>
        <Link to="/">
          Home
        </Link>
    </div>
    );


  }

}

export default Products;