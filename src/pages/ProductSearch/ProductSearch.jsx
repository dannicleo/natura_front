import { useState, useEffect } from 'react'
import ProductCard from '../../components/Card/ProductCard';
import './ProductSearch.css'

function SearchProducts(props) {

    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(12);
    const [start, setStart] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [noResults, setNoResults] = useState(false)
    
    const fetchProducts = async () => {
        setLoading(true)
        try {
            const response = await fetch(`http://localhost:3000/product?limit=${limit}&start=${start}&name=${props.searchTerm}`, {
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json()
            if(data.data.length === 0) {
                setProducts([])
                setNoResults(true)
                setHasMore(false)
            } else {
                setNoResults(false)
                setProducts((prevProducts) => [...prevProducts, ...data.data])
            }
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
    }, [props.searchTerm]);

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
        <div className="showcase-search-wrapper">
            {noResults && <div className="not-found-search">
                <h1>Você buscou por "{props.searchTerm}"</h1>
                <h4>ops, infelizmente não encontramos nenhum resultado.</h4>
                <ul>
                    <li>faça buscas relacionadas;</li>
                    <li>verifique se a palavra foi digitada corretamente;</li>
                    <li>tente palavras menos específicas;</li>
                    <li>tente palavras-chave diferentes.</li>
                </ul>
            </div>}

            <div className="showcase-search-header">
                <h2>especialmente pra você</h2>
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

export default SearchProducts;