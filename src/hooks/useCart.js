import { useState, useEffect } from 'react';

const useCart = () => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : {
            address: { zip_code: "" },
            clientId: "",
            coupon: [],
            products: []
        };
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        // console.log(cart)
        setCart((prevCart) => {
            const existingProduct = prevCart.products.find(item => item.id === product.id);
            if (!existingProduct) {
                return {
                    ...prevCart,
                    products: [...prevCart.products, { ...product, quantity: 1 }]
                }
            }
            return {
                ...prevCart,
                products: prevCart.products.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
        })
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => ({
            ...prevCart,
            products: prevCart.products.filter((item) => item.id !== productId)
        }));
    };

    const clearCart = () => {
        setCart({
            address: { zip_code: "" },
            clientId: "",
            coupon: [],
            products: []
        });
    };

    return { cart, addToCart, removeFromCart, clearCart };
};

export { useCart };