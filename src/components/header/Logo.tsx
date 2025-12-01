import logo from "../../assets/images/logo.png";
const Logo = () => {
    return (
        <a href="/">
            <img className="logo" src={logo} alt="Logo" width={130} height={25} />
        </a>
    )
}

export default Logo;