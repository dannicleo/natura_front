import { useState, useEffect } from 'react'
import ProductCard from '../Card/ProductCard';
import './Showcase.css'

function ShowCase() {

    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(12);
    const [start, setStart] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); 
    
    const fetchProducts = async () => {
        setLoading(true)
        try {
          const response = await fetch(`http://localhost:3000/product?limit=${limit}&start=${start}`, {
            headers: { 'Content-Type': 'application/json' },
          });
          const data = await response.json()
          data.data.length === 0?  setHasMore(false):setProducts((prevProducts) => [...prevProducts, ...data.data])
        } catch (error) {
            console.error('Erro ao buscar produtos:', error)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        fetchProducts()
    }, []);

    useEffect(() => {
        fetchProducts()
    }, [start])


    const getProducts = () => {
        return products?.map((product, i) => { 
            return <ProductCard key={`${product.productIdView}-${i}`} product={product}/>
        })
    }

    const loadMore = () => {
        setStart((prevStart) => prevStart + limit)
    };

    return (
        <div className="showcase-wrapper">

            <div className="showcase-header">
                <h2>descubra as fragrâncias que combinam com você</h2>
            </div>
            
            <div className="product-list">
                {getProducts()}
            </div>
    
            {hasMore && <div className="loadbutton-wrapper">
                <button onClick={() => loadMore()}>Carregar outros</button>
            </div>}
        </div>
    );
}

export default ShowCase;