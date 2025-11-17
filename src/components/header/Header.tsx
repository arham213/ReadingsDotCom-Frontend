import Logo from "./Logo"
import "../../assets/styles/header.css"
import SearchBar from "./SearchBar";
import Button from "../common/Button";
import cart from "../../assets/images/cart.png";
import TopBar from "./TopBar";
import Navbar from "../navbar/Navbar";

const Header = () => {
    return (
        <>
            <div className="container top-bar-container">
                <TopBar />
            </div>
            <header className="container header">
                <div className="middle-bar">
                    <div className="left-content">
                        <Logo />
                    </div>
                    <div className="middle-content">
                        <SearchBar />
                        <Button
                            text="Advanced Search"
                            classNames="advanced-search"
                            onClick={() => window.location.href="/advance-search"}
                        />
                        <Button
                            text="Request a Book"
                            classNames="request-a-book"
                            onClick={() => window.location.href="/book-request"}
                        />
                    </div>
                    <div className="right-content">
                        <a href="/order-cart" className="orders-link">ORDERS</a>
                        <div className="icon cart-icon">
                            <img src={cart} alt="Cart" width={30} height={25}/>
                            <span className="count-pill">0</span>
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    <Navbar />
                </div>
            </header>
        </>
    )
}

export default Header;