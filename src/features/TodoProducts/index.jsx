import React from 'react';
import ProductList from './components/ProductList';

ProductFeature.propTypes = {
    
};

function ProductFeature(props) {
    const {data} = props;
    console.log(data);
    return (
        <div>
             <h2>LOÀI NỔI BẬT</h2>
                <ProductList productList={data} />
        </div>
    );
}

export default ProductFeature;