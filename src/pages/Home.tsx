import Products from "../components/common/products"
import "../assets/styles/home.css"
import HeroSection from "../components/home/HeroSection";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Products categoryName="New Releases" />
            <Products categoryCode={401} heading="Latest Fiction" />
            <Products categoryCode={501} heading="Non-Fiction New Arrivals" />
            <Products categoryName="Coming Soon (Pre-Order)" />
            <Products categoryCode={801} heading="New Urdu Releases" />
            <Products categoryCode={1001} heading="Huge Discounts (50% Off)" />
        </div>
    )
}

export default Home;