import axiosInstance from "../api/axiosInstance";
import { API_ENDPOINTS } from "../api/endPoints";
import { AdvancedSearchFormState } from "../types/Book";

export const getCategoryBooks = async (categoryCode: Number) => {
    console.log('categoryCode in service:', categoryCode);
    const response = await axiosInstance.get(API_ENDPOINTS.BOOK.GET_BOOKS_BY_CATEGORY(categoryCode))
    return response.data;
}

export const getAuthorBooks = async (authorId: string) => {
    console.log('authorId in service:', authorId);
    const response = await axiosInstance.get(API_ENDPOINTS.BOOK.GET_BOOKS_BY_AUTHOR(authorId))
    return response.data;
}

export const getSingleBook = async (bookId: string) => {
    console.log('categoryCode in service:', bookId);
    const response = await axiosInstance.get(API_ENDPOINTS.BOOK.GET_BOOK(bookId))

    return response.data;
}

export const doAdvancedSearch = async (queryParams: string) => {
    const response = await axiosInstance.get(API_ENDPOINTS.BOOK.ADVANCED_SEARCH(queryParams))

    return response.data;
}

export const doSearch = async (searchString: string) => {
    const response = await axiosInstance.get(API_ENDPOINTS.BOOK.SEARCH(searchString))

    return response.data;
}