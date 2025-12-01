import axiosInstance from "../api/axiosInstance";
import { API_ENDPOINTS } from "../api/endPoints";
import { AddToCartRequestBody, DeleteCartItemRequestBody } from "../types/Cart";

export const getUserCart = async () => {
    const user = JSON.parse(localStorage.getItem('user') || "null");

    const response = await axiosInstance.get(API_ENDPOINTS.CART.GET_CART, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    })
    return response.data;
}

export const addProductToCart = async (requestBody: AddToCartRequestBody) => {
    const user = JSON.parse(localStorage.getItem('user') || "null");

    const response = await axiosInstance.post(API_ENDPOINTS.CART.ADD_TO_CART, requestBody, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    })
    return response.data;
}

export const updateItemInCart = async (requestBody: DeleteCartItemRequestBody) => {
    const user = JSON.parse(localStorage.getItem('user') || "null");

    const response = await axiosInstance.put(API_ENDPOINTS.CART.UPDATE_CART_ITEM, requestBody, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    })
    return response.data;
}

export const deleteItemFromCart = async (requestBody: DeleteCartItemRequestBody) => {
    const user = JSON.parse(localStorage.getItem('user') || "null");

    const response = await axiosInstance.delete(API_ENDPOINTS.CART.DELETE_CART_ITEM, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        },
        data: requestBody
    })
    return response.data;
}

export const clearCartItems = async (cartId: string) => {
    const user = JSON.parse(localStorage.getItem('user') || "null");

    const response = await axiosInstance.delete(API_ENDPOINTS.CART.CLEAR_CART, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        },
        data: { cartId }
    })
    return response.data;
}