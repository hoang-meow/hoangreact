import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product';

ProductList.propTypes = {
    productList : PropTypes.array.isRequired,
};
ProductList.dedaultProps = {
    productList :[],
}
function ProductList({productList}) {
    console.log(productList);
    return (
        <div>
              <ul className='product-list'>
            {productList.map(product=>(
                <li key={product.id}>
                    <Product product={product}></Product>
                </li>
            ))}
       </ul>
        </div>
    );
}

export default ProductList;