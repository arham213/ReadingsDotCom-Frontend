import axiosInstance from "../api/axiosInstance";
import { API_ENDPOINTS } from "../api/endPoints";
import { OrderRequestBody } from "../types/Checkout";

export const placeOrderForUser = async (requestBody: OrderRequestBody) => {
    const user = JSON.parse(localStorage.getItem('user') || "null");

    const response = await axiosInstance.post(API_ENDPOINTS.ORDER.PLACE_ORDER, requestBody, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    })
    return response.data;
}