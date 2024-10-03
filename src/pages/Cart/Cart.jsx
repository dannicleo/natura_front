import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ProductCartCard from '../../components/Card/ProductCartCard';
import { useNavigate } from 'react-router-dom';

import './Cart.css';

const CartEmpty = () => {
    return (
        <div className="cart-empty">
            <h2>Nenhum produto adicionado</h2>
        </div>
    )
}

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);
    const [calculatedCart, setCalculatedCart] = useState()
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    

    const fetchData = async () => {
        setLoading(true); 
        try {
            const response = await fetch('http://localhost:3000/cart', { 
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(cart),
            })
            const data = await response.json()
            console
            setCalculatedCart(data)
        } catch (error) {
            console.error('Erro:', error)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData()
    }, [cart])

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

    const getCartItems = () => {
        return calculatedCart?.products?.map((product, i) => { 
            return <ProductCartCard key={`${product.productIdView}-${i}`} product={product}/>
        })
    }
    
    const goHome = () => {
        navigate(`/`)
    }

    return (
        <div className="cart-page">
            <h2>Carrinho</h2>
            {
                calculatedCart?.products?.length === 0 ? ( <CartEmpty /> ) : 
                (
                    <div className='cart-wrapper'>

                        <div className="product-list">
                            <h4>RESUMO</h4>
                            {getCartItems()}
                        </div>

                        <div className="cart-resume">
                            <h4>RESUMO</h4>
                            <div className='item-resume'>
                                <div className="description">Valor dos Produtos:</div>
                                <div className="value">R$ {calculatedCart?.summary.totalProducts}</div>
                            </div>
                            <div className='item-resume'>
                                <div className="description">Frete:</div>
                                <div className="value">R$ {calculatedCart?.summary.shippingValue}</div>
                            </div>
                            <div className='item-resume'>
                                <div className="description">Descontos:</div>
                                <div className="value">R$ {calculatedCart?.summary.shippingValue}</div>
                            </div>
                            <div className='item-resume'>
                                <div className="description">Total:</div>
                                <div className="value">R$ {calculatedCart?.summary.total}</div>
                            </div>

                            <div className="cart-button button-close-chart">
                                IR PARA PAGAMENTO
                            </div>

                            <div 
                                className="cart-button button-exit-chart"
                                onClick={() => { goHome() }}
                            >
                                CONTINUAR COMPRANDO
                            </div>
                        </div>
                </div>
            )}
        </div>
    );
    };

export default Cart;