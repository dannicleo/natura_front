import { useParams } from "react-router-dom";

import HeaderBar from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SearchProducts from "../ProductSearch/ProductSearch";

import './Search.css'

function Search() {

    const { query } = useParams()

    return ( 
        <div className="search-page-wrapper">
            <HeaderBar />   
            <SearchProducts searchTerm={query || ''}/>
            <Footer />
        </div>
    );
}

export default Search;