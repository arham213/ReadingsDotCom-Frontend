import { useState } from "react"
import InputField from "../../components/common/InputField";
import { handleResendOTP, handleVerifyEmail } from "../../actions/authActions";
import "../../assets/styles/auth/verifyEmail.css"
import { useLocation, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
    const userId = useLocation().pathname.split("/")[2];

    const [verifyEmailState, setVerifyEmailState] = useState({
        OTP: Array(6).fill(""),
        loading: false,
        resendingOTP: false,
        error: "",
        success: ""
    })

    const navigate = useNavigate();

    const handleInputChange = (value: string, index: number) => {
        if (!/^[0-9]?$/.test(value)) return;

        const updatedOTP = [...verifyEmailState.OTP];
        updatedOTP[index] = value;
        setVerifyEmailState({
            ...verifyEmailState,
            OTP: updatedOTP
        })

        if (value && index < 5) {
            document.getElementById(`OTP-index-${index + 1}`)?.focus()
        }

    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        handleVerifyEmail(userId, verifyEmailState.OTP.join(""), navigate, setVerifyEmailState);
    }

    const handleResendOTPFunc = () => {
        handleResendOTP(userId, setVerifyEmailState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="verifyEmail-form">
                <h2>Verify Email</h2>
                <p>An OTP just sent to your email. Please verify it</p>
                <div className="form-fields">
                    <InputField
                        inputId="OTP-index-0"
                        type="number"
                        value={verifyEmailState?.OTP[0]}
                        onChange={(e: any) => handleInputChange(e.target.value, 0)}
                        classNames="input-field"
                    />
                    <InputField
                        inputId="OTP-index-1"
                        type="number"
                        value={verifyEmailState?.OTP[1]}
                        onChange={(e: any) => handleInputChange(e.target.value, 1)}
                        classNames="input-field"
                    />
                    <InputField
                        inputId="OTP-index-2"
                        type="number"
                        value={verifyEmailState?.OTP[2]}
                        onChange={(e: any) => handleInputChange(e.target.value, 2)}
                        classNames="input-field"
                    />
                    <InputField
                        inputId="OTP-index-3"
                        type="number"
                        value={verifyEmailState?.OTP[3]}
                        onChange={(e: any) => handleInputChange(e.target.value, 3)}
                        classNames="input-field"
                    />
                    <InputField
                        inputId="OTP-index-4"
                        type="number"
                        value={verifyEmailState?.OTP[4]}
                        onChange={(e: any) => handleInputChange(e.target.value, 4)}
                        classNames="input-field"
                    />
                    <InputField
                        inputId="OTP-index-5"
                        type="number"
                        value={verifyEmailState?.OTP[5]}
                        onChange={(e: any) => handleInputChange(e.target.value, 5)}
                        classNames="input-field"
                    />
                </div>
                <div className="action-buttons">
                    <button
                        type="submit"
                        disabled={verifyEmailState?.loading}
                    >
                        {verifyEmailState?.loading ? "Verifying..." : "Verify"}
                    </button>
                    <a onClick={handleResendOTPFunc}>
                        {verifyEmailState?.resendingOTP ? "Resending..." : "Resend Code"}
                    </a>
                </div>
            </form>
        </div>
    )
}

export default VerifyEmail;