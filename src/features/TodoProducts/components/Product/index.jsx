import React from 'react';
import PropTypes from 'prop-types';
import {endpoints} from '../../../../../src/env';

Product.propTypes = {
    product:PropTypes.object.isRequired
};

function Product({product}) {
    return (
        <div>
             <div className='product'>
            <div className='product__thumbnail'>
            <img src={endpoints +product.attachments[0].path} alt=""/>

            </div>
            <p className='product__title'>{product.ten}</p>
        </div>
        </div>
    );
}

export default Product;