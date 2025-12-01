import Products from "../components/common/products"
import "../assets/styles/home.css"
import HeroSection from "../components/home/HeroSection";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Products categoryName="New Releases" />
            <Products categoryName="New at Readings" />
            <Products categoryName="New in Our Publications" />
            <Products categoryName="Coming Soon (Pre-Order)" />
            <Products categoryName="International Bestsellers" />
            <Products categoryName="Bestsellers in Our Publications" />
        </div>
    )
}

export default Home;