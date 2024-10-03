import React, { useContext } from 'react';
import './ProductCard.css';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { CartContext } from '../../context/CartContext';

const ProductCard = (props) => {
  const { product } = props
  const { id, name, brand, price, images } = product
  const { addToCart } = useContext(CartContext) 

  return (
    <div className="product-card">
      <div className="badge">lançamento</div>
      <img
        src={images[0].absURL}
        alt={name}
        className="product-image"
      />
      <div className="info-product">
        <div 
          className="add-to-cart"
          onClick={() => addToCart(product)}
        >
          <ShoppingBagIcon className="size-6 text-blue-500"/>
        </div>
        <h3 className="product-brand">{brand}</h3>
        <p className="product-name">{name}</p>
        <p className="product-price">R$ {price}</p>
      </div>
    </div>
  )
}

export default ProductCard;