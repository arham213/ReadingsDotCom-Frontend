import { useState } from "react"
import InputField from "../../components/common/InputField";
import { handleLogin } from "../../actions/authActions";
import "../../assets/styles/auth/login.css"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
    const { login } = useAuth();
    const [loginState, setLoginState] = useState({
        email: "",
        password: "",
        loading: false,
        error: "",
        success: ""
    })

    const navigate = useNavigate();

    const handleInputChange = (key: string, value: string) => {
        setLoginState((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        handleLogin(loginState.email, loginState.password, login, navigate, setLoginState);
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                <InputField
                    label="Email"
                    type="email"
                    value={loginState?.email}
                    onChange={(e: any) => handleInputChange("email", e.target.value)}
                    classNames="input-field"
                />
                <InputField
                    label="Password"
                    type="text"
                    value={loginState?.password}
                    onChange={(e: any) => handleInputChange("password", e.target.value)}
                    classNames="input-field"
                />
                <button
                    type="submit"
                    disabled={loginState?.loading}
                >
                    {loginState?.loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    )
}

export default Login;