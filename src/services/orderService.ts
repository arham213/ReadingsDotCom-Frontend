import axiosInstance from "../api/axiosInstance";
import { API_ENDPOINTS } from "../api/endPoints";

export const getMyOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    const response = await axiosInstance.get(API_ENDPOINTS.ORDER.GET_ORDERS, {
        headers: {
            Authorization: `Bearer ${user?.token}`
        }
    })
    return response.data;
}