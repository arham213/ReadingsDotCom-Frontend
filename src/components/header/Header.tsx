import { useState } from "react";
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="top-bar-container">
                <TopBar user={user} logout={logout} />
            </div>
            <div className="container middle-bar">
                <div className="left-content">
                    {/* Hamburger Button — visible only on mobile via CSS */}
                    <button
                        className="hamburger-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger-icon ${mobileMenuOpen ? "open" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                    <Logo />
                </div>
                <div className="middle-content desktop-only">
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
                    <a href="/cart" className="orders-link desktop-only">ORDERS</a>
                    <a href="/cart" className="icon cart-icon">
                        <img src={cart} alt="Cart" width={30} height={25} />
                        <span className="count-pill">{user?.cart?.cartItemCount || 0}</span>
                    </a>
                </div>
            </div>
            <div className="navbar-wrapper desktop-only">
                <Navbar />
            </div>

            {/* ---- Mobile Slide-out Menu ---- */}
            {mobileMenuOpen && (
                <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
            )}
            <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
                <div className="mobile-drawer-header">
                    <Logo />
                    <button
                        className="mobile-close-btn"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >✕</button>
                </div>
                <div className="mobile-search">
                    <SearchBar />
                </div>
                <nav className="mobile-nav">
                    <Navbar />
                </nav>
                <div className="mobile-links">
                    <a href="/advanced-search">Advanced Search</a>
                    <a href="/book-request">Request a Book</a>
                    <a href="/cart">Orders</a>
                    <a href="/wishlist">Wishlist</a>
                    {!user ? (
                        <>
                            <a href="/login">Login</a>
                            <a href="/register">Register</a>
                        </>
                    ) : (
                        <>
                            <a href="/orders">Your Orders</a>
                            <a href="/wishlist">Your Wishlist</a>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;