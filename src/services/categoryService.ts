import axiosInstance from "../api/axiosInstance";
import { API_ENDPOINTS } from "../api/endPoints";

export const getBooks = async (categoryCode: Number) => {
    console.log('categoryCode in service:', categoryCode);
    const response = await axiosInstance.get(API_ENDPOINTS.CATEGORY.GET_CATEGORY_BOOKS(categoryCode))
    
    return response.data;
}