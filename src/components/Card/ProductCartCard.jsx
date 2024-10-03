import React, { useContext } from 'react';
import './ProductCartCard.css';
import { ChevronLeftIcon, ChevronRightIcon, ShoppingBagIcon, TrashIcon } from '@heroicons/react/24/solid';
import { CartContext } from '../../context/CartContext';

const ProductCartCard = (props) => {
  const { product } = props
  const { id, name, brand, price, quantity, images } = product
  const { addToCart } = useContext(CartContext) 

  return (
    <div className="product-card-cart">

      <img
        src={images[0].absURL}
        alt={name}
        className="product-image"
      />

      <div className="info-product">
        <h3 className="product-brand">{brand}</h3>
        <p className="product-name">{name}</p>
      </div>

        <div className="quant-info">
            <div className="quantity-input-wrapper">
                <ChevronLeftIcon className='icon'/>
                <input type="text" value={quantity} />
                <ChevronRightIcon className='icon'/>
            </div>
            <div className="remove-icon">
                <TrashIcon />
            </div>
        </div>

        <div className="value-info">
            <span>Preço à vista no PIX:</span>
            <p className="product-price">R$ {price}</p>
        </div>

    </div>
  )
}

export default ProductCartCard;