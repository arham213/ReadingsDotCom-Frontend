import Logo from "./Logo"
import "../../assets/styles/header.css"
import SearchBar from "./SearchBar";
import Button from "../common/Button";
import cart from "../../assets/images/cart-icon.png";
import TopBar from "./TopBar";
import Navbar from "../navbar/Navbar";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <header className="header">
            <div className="top-bar-container">
                <TopBar user={user} logout={logout} />
            </div>
            <div className="container middle-bar">
                <div className="left-content">
                    <Logo />
                </div>
                <div className="middle-content">
                    <SearchBar />
                    <Button
                        text="Advanced Search"
                        classNames="advanced-search"
                        onClick={() => window.location.href = "/advanced-search"}
                    />
                    <Button
                        text="Request a Book"
                        classNames="request-a-book"
                        onClick={() => window.location.href = "/book-request"}
                    />
                </div>
                <div className="right-content">
                    <a href="/cart" className="orders-link">ORDERS</a>
                    <a href="/cart" className="icon cart-icon">
                        <img src={cart} alt="Cart" width={30} height={25} />
                        <span className="count-pill">{user?.cart?.cartItemCount || 0}</span>
                    </a>
                </div>
            </div>
            <div className="navbar">
                <Navbar />
            </div>
        </header>
    )
}

export default Header;