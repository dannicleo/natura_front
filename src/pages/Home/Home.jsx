import Banner from "../../components/banner/Banner";
import HeaderBar from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ShowCase from "../../components/ShowCase/ShowCase";
import './Home.css'

function Home() {
    return ( 
        <div className="home-wrapper">
            <HeaderBar />
            <Banner />
            <ShowCase />
            <Footer />
        </div>
    );
}

export default Home;