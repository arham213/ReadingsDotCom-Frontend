import { isAxiosError } from "axios";
import { doAdvancedSearch, doSearch, getAuthorBooks, getCategoryBooks, getSingleBook } from "../services/productService";
import { AdvancedSearchFormState } from "../types/Book";
import toast from "../utils/toast";

export const getBooksByCategory = async (categoryCode: Number, setState: any) => {
    console.log('categoryCode in action:', categoryCode);
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));
        const response = await getCategoryBooks(categoryCode);
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Books fetched successfully", books: response.data.books }));

        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            toast.show(error?.response?.data?.error?.message || "Failed to fetch Books")
        } else {
            toast.show("Something went wrong. Please try again later");
        }
        console.error('Error fetching Books:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}

export const getBooksByAuthor = async (authorId: string, setState: any) => {
    console.log('authorId in action:', authorId);
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));
        const response = await getAuthorBooks(authorId);
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Books fetched successfully", books: response.data.books }));

        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            toast.show(error?.response?.data?.error?.message || "Failed to fetch books")
        } else {
            toast.show("Something went wrong. Please try again later");
        }
        console.error('Error fetching Books:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}

export const getBook = async (bookId: string, setState: any) => {
    console.log('bookId in action:', bookId);
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));
        const response = await getSingleBook(bookId);
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Book fetched successfully", book: response.data.book }));

        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            toast.show(error?.response?.data?.error?.message || "Failed to fetch books")
        } else {
            toast.show("Something went wrong. Please try again later");
        }
        console.error('Error fetching Book:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}

export const advancedSearchBooks = async (queryParams: string, setState: any) => {
    // console.log('bookId in action:', bookId);
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));

        const response = await doAdvancedSearch(queryParams);
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Books searched successfully", books: response.data.books }));
        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            toast.show(error?.response?.data?.error?.message || "Failed to search books")
        } else {
            toast.show("Something went wrong. Please try again later");
        }
        console.error('Error searching Books:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}

export const searchBooks = async (searchString: string, setState: any) => {
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));

        const response = await doSearch(searchString);
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Books searched successfully", books: response.data.books }));
        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            toast.show(error?.response?.data?.error?.message || "Failed to search books")
        } else {
            toast.show("Something went wrong. Please try again later");
        }
        console.error('Error searching Books:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}