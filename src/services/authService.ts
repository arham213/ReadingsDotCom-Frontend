import axiosInstance from "../api/axiosInstance"
import { API_ENDPOINTS } from "../api/endPoints"
import { User } from "../types/auth";

export const loginUser = async (email: string, password: string) => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, {
        email,
        password
    })
    return response.data;
}

export const registerUser = async (userData: User) => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.REGISTER, userData);
    return response.data;
}

export const verifyUserEmail = async (userId: string, OTP: string) => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.VERIFY_EMAIL, {
        userId,
        OTP
    });
    return response.data;
}

export const resendOTP = async (userId: string) => {
    const response = await axiosInstance.get(API_ENDPOINTS.AUTH.RESEND_OTP(userId));
    return response.data;
}