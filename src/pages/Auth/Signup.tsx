import { useState } from "react"
import InputField from "../../components/common/InputField";
import { handleSignup } from "../../actions/authActions";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/auth";
import "../../assets/styles/auth/signup.css";

const Signup = () => {
    const [signupState, setSignupState] = useState({
        fname: "",
        lname: "",
        email: "",
        contactNo: "",
        password: "",
        loading: false,
        error: "",
        success: ""
    })

    const navigate = useNavigate();

    const handleInputChange = (key: string, value: string) => {
        setSignupState((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const useData: User = {
            fname: signupState.fname,
            lname: signupState.lname,
            email: signupState.email,
            contactNo: signupState.contactNo,
            password: signupState.password
        }
        handleSignup(useData, navigate, setSignupState);
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit} className="signup-form">
                <h2>Signup</h2>
                <InputField
                    label="First Name"
                    type="text"
                    value={signupState?.fname}
                    onChange={(e: any) => handleInputChange("fname", e.target.value)}
                    classNames="input-field"
                />
                <InputField
                    label="Last Name"
                    type="text"
                    value={signupState?.lname}
                    onChange={(e: any) => handleInputChange("lname", e.target.value)}
                    classNames="input-field"
                />
                <InputField
                    label="Email"
                    type="email"
                    value={signupState?.email}
                    onChange={(e: any) => handleInputChange("email", e.target.value)}
                    classNames="input-field"
                />
                <InputField
                    label="Contact No"
                    type="tel"
                    value={signupState?.contactNo}
                    onChange={(e: any) => handleInputChange("contactNo", e.target.value)}
                    classNames="input-field"
                />
                <InputField
                    label="Password"
                    type="password"
                    value={signupState?.password}
                    onChange={(e: any) => handleInputChange("password", e.target.value)}
                    classNames="input-field"
                />
                <button
                    type="submit"
                    disabled={signupState?.loading}
                >
                    {signupState?.loading ? "Signing up..." : "Signup"}
                </button>
            </form>
        </div>
    )
}

export default Signup;