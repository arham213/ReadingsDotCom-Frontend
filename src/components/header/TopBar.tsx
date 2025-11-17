const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="left-content">
                <a href="/" className="text">Home</a>
            </div>
            <div className="right-content">
                <a href="/login" className="text">Login</a>
                <a href="/register" className="text">Register</a>
                <a href="/card-discounts" className="text">Bank Card Discounts</a>
            </div>
        </div>
    )
}

export default TopBar;