import { isAxiosError } from "axios";
import { loginUser, registerUser, resendOTP, verifyUserEmail } from "../services/authService";
import { StoredUser, User } from "../types/auth";

export const handleSignup = async (userData: User, navigate: any, setState: any) => {
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));
        const response = await registerUser(userData);
        
        if (response?.success) {
            window.alert("Signup successful");
            setState((prev: any) => ({...prev, success: "Signup successful"}));
            navigate(`/verify-email/${response.data.userId}`);
        } else {
            throw new Error(response?.error?.message);
        }
    } catch(error: any) {
        if (isAxiosError(error)) {
            window.alert(error?.response?.data?.error?.message || "Failed to Signup")
        } else {
            window.alert("Something went wrong. Please try again later");
        }
        console.error('Error logging in:', error);
        setState((prev: any) => ({...prev, error: error.message || "Something went wrong"}));
    } finally {
        setState((prev: any) => ({...prev, loading: false}));
    }
}

export const handleVerifyEmail = async (userId: string, OTP: string, navigate: any, setState: any) => {
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));
        const response = await verifyUserEmail(userId, OTP);
        
        if (response?.success) {
            window.alert("Email Verified successful");
            setState((prev: any) => ({...prev, success: "Email Verified successful"}));
            navigate("/login");
        } else {
            throw new Error(response?.error?.message);
        }
    } catch(error: any) {
        if (isAxiosError(error)) {
            window.alert(error?.response?.data?.error?.message || "Failed to Verify Email")
        } else {
            window.alert("Something went wrong. Please try again later");
        }
        console.error('Error verifying email:', error);
        setState((prev: any) => ({...prev, error: error.message || "Something went wrong"}));
    } finally {
        setState((prev: any) => ({...prev, loading: false}));
    }
}

export const handleResendOTP = async (userId: string, setState: any) => {
    try {
        setState((prev: any) => ({ ...prev, resendingOTP: true, error: "" }));
        const response = await resendOTP(userId);
        
        if (response?.success) {
            window.alert("OTP resent successfully");
            setState((prev: any) => ({...prev, success: "OTP resent successfully"}));
        } else {
            throw new Error(response?.error?.message);
        }
    } catch(error: any) {
        if (isAxiosError(error)) {
            window.alert(error?.response?.data?.error?.message || "Failed to Resend OTP")
        } else {
            window.alert("Something went wrong. Please try again later");
        }
        console.error('Error reseding OTP:', error);
        setState((prev: any) => ({...prev, error: error.message || "Something went wrong"}));
    } finally {
        setState((prev: any) => ({...prev, resendingOTP: false}));
    }
}

export const handleLogin = async (email: string, password: string, login: (user: StoredUser) => void, navigate: any, setState: any) => {
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));
        const response = await loginUser(email, password);
        
        if (response?.success) {
            window.alert("Login successful");
            setState((prev: any) => ({...prev, success: "Login successful"}));
            // localStorage.setItem('user', JSON.stringify(response.data.user));
            login(response.data?.user);
            navigate("/");
        } else {
            throw new Error(response?.error?.message);
        }
    } catch(error: any) {
        if (isAxiosError(error)) {
            window.alert(error?.response?.data?.error?.message || "Failed to login")
        } else {
            window.alert("Something went wrong. Please try again later");
        }
        if (error?.response?.data?.data) {
            navigate(`/verify-email/${error?.response?.data?.data.userId}`)
        }
        console.error('Error logging in:', error);
        setState((prev: any) => ({...prev, error: error.message || "Something went wrong"}));
    } finally {
        setState((prev: any) => ({...prev, loading: false}));
    }
}