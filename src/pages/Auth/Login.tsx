import { useState } from "react"
import InputField from "../../components/common/InputField";
import { handleLogin } from "../../actions/authActions";

const Login = () => {
    const [loginState, setLoginState] = useState({
        email: "",
        password: "",
        loading: false,
        error: "",
        success: ""
    })

    const handleInputChange = (key: string, value: string) => {
        setLoginState((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        handleLogin(loginState.email, loginState.password, setLoginState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <InputField
                    label="Email"
                    type="email"
                    value={loginState?.email}
                    onChange={(e: any) => handleInputChange("email", e.target.value)}
                />
                <InputField
                    label="Password"
                    type="text"
                    value={loginState?.password}
                    onChange={(e: any) => handleInputChange("password", e.target.value)}
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