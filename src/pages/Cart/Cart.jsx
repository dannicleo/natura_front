import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ProductCartCard from '../../components/Card/ProductCartCard';
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

                            <div className="cart-button button-exit-chart">
                                CONTINUAR COMPRANDO
                            </div>
                        </div>


                    {/* <ul>
                        {calculatedCart?.products?.map(item => (
                        <li key={item.id} className="cart-item">
                            <div>
                            <strong>{item.name}</strong> - Quantidade: {item.quantity}
                            <span> - Preço: R$ {parseFloat(item.price).toFixed(2)}</span>
                            </div>
                            <button onClick={() => handleRemove(item.id)}>Remover</button>
                        </li>
                        ))}
                    </ul> */}
                    {/* <div className="cart-summary">
                        <h3>Total: R$ {calculatedCart?.products?.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2)}</h3>
                        <button onClick={clearCart}>Limpar Carrinho</button>
                    </div>
                    <div className="cart-address">
                        <h3>Endereço</h3>
                        <p>CEP: {calculatedCart?.address?.zip_code}</p>
                    </div>
                    <div className="cart-client">
                        <h3>ID do Cliente</h3>
                        <p>{calculatedCart?.clientId}</p>
                    </div> */}
                </div>
            )}
        </div>
    );
    };

export default Cart;