import { StoredUser } from "../../types/auth";
import { useNavigate } from "react-router-dom";

const TopBar = ({ user, logout }: { user: StoredUser | null, logout: () => void }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/login");
    }
    return (
        <div className="container top-bar">
            <div className="left-content">
                <a href="/" className="text">Home</a>
            </div>
            <div className="right-content">
                {!user ? <a href="/login" className="text">Login</a> : <p>Hi,  {user.name}</p>}
                {!user ? <a href="/register" className="text">Register</a> : (
                    <div className="your-account">
                        <div className="text-and-icon">
                            <p>Your Account</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                        <div className="dropdown">
                            <a href="/orders">Your Orders</a>
                            <a href="/wishlist">Your Wishlist</a>
                            <a href="">Edit/Update Profile</a>
                            <a onClick={handleLogout}>Logout</a>
                        </div>
                    </div>
                )}
                <a href="/card-discounts" className="text">Bank Card Discounts</a>
            </div>
        </div>
    )
}

export default TopBar;