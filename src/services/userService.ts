import axiosInstance from "../api/axiosInstance";
import { API_ENDPOINTS } from "../api/endPoints";
import { AddressForm, UserAddress } from "../types/User";

export const getAddressesByUser = async (userId: string) => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    console.log('userId in service:', userId);
    const response = await axiosInstance.get(API_ENDPOINTS.ADDRESSES.GET_ADDRESSES(userId), {
        headers: {
            Authorization: `Bearer ${user?.token}`
        }
    })
    return response.data;
}

export const getWishlistItems = async () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    const response = await axiosInstance.get(API_ENDPOINTS.USER.GET_WISHLIST, {
        headers: {
            Authorization: `Bearer ${user?.token}`
        }
    })
    return response.data;
}

export const getUserOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    const response = await axiosInstance.get(API_ENDPOINTS.USER.GET_WISHLIST, {
        headers: {
            Authorization: `Bearer ${user?.token}`
        }
    })
    return response.data;
}

export const addUserAddress = async (address: AddressForm, userId: string) => {
    const user = JSON.parse(localStorage.getItem('user') || "null");

    const response = await axiosInstance.post(API_ENDPOINTS.ADDRESSES.GET_ADDRESSES(userId), address, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    })
    return response.data;
}
export const addItemToWishlist = async (bookId: string) => {
    const user = JSON.parse(localStorage.getItem('user') || "null");

    const response = await axiosInstance.post(API_ENDPOINTS.USER.ADD_TO_WISHLIST(bookId), null, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    })
    return response.data;
}

export const removeItemFromWishlist = async (bookId: string) => {
    const user = JSON.parse(localStorage.getItem('user') || "null");

    const response = await axiosInstance.delete(`${API_ENDPOINTS.USER.REMOVE_FROM_WISHLIST}/${bookId}`, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    })
    return response.data;
}