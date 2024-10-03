import { HeartIcon, UserIcon, ShoppingBagIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

import './Header.css'

function HeaderBar(){
    const [ searchTerm, setSearchTerm ] = useState('') 
    const { cart } = useContext(CartContext)
    const [ productQty, setProductQty ] = useState(0)
    const navigate = useNavigate();

    useEffect(() => {
        setProductQty(cart?.products?.length)
    }, [cart])

    const handlerSearch = (event) => {
        event.preventDefault();
        if(searchTerm.trim()) navigate(`/search/${searchTerm}`)
    }

    const goHome = () => {
        navigate(`/`)
    }

    const showCart = () =>{
        navigate(`/cart`)
    }

    return (
        <header className="header-bar">
            <div className="line1">
                <div className="logo-name" onClick={goHome}>Cosméticos&Co</div>
                <div className="search-bar">
                    <input 
                        type="text" 
                        className="serch-input" 
                        placeholder="o que está buscando hoje?"
                        onChange={(e) => setSearchTerm(e.target.value)}    
                    />
                    <div 
                        className="search-button-wrapper"
                        onClick={handlerSearch}
                    >
                        <MagnifyingGlassIcon className="search-icon size-6 text-blue-500"/>
                    </div>
                </div>
                <div className='button-wrapper login-button-wrapper'>
                    <UserIcon className="size-6 text-blue-500"/>
                </div>
                <div className='button-wrapper favorite-button-wrapper'>
                    <HeartIcon className="size-6 text-blue-500"/>
                </div>
                <div 
                    className='button-wrapper cart-button-wrapper'
                    onClick={() => { showCart() }}
                >
                    {productQty > 0 && <div className='cart-qty-badge'>{productQty}</div>}
                    <ShoppingBagIcon className="icon size-6 text-blue-500"/>
                </div>
            </div>
            <div className="line2">
                <div className="category-bar">
                    <div className="category">Eletrônicos</div>
                    <div className="category">Livros</div>
                    <div className="category">Perfumaria</div>
                    <div className="category">Casa e Cozinha</div>
                    <div className="category">Esportes</div>
                </div>
            </div>
        </header>
    );
}

export default HeaderBar;