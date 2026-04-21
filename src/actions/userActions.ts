import { isAxiosError } from "axios";
import { addItemToWishlist, addUserAddress, getAddressesByUser, getWishlistItems, removeItemFromWishlist } from "../services/userService";
import { AddressForm } from "../types/User";
import toast from "../utils/toast";

export const getUserAddresses = async (setState: any) => {
    // console.log('categoryCode in action:', categoryCode);
    try {
        const user = JSON.parse(localStorage.getItem("user") || "null");

        if (!user) {
            throw new Error("Session Expired!\nPlease Login")
        }

        setState((prev: any) => ({ ...prev, loading: true, error: "" }));

        const response = await getAddressesByUser(user.id);
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Addresses fetched successfully", addresses: response.data.addresses }));

        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            toast.show(error?.response?.data?.error?.message || "Failed to fetch Addresses")
        } else {
            toast.show("Something went wrong. Please try again later");
        }
        console.error('Error fetching Addresses:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}

export const getWishlist = async (setState: any) => {
    try {
        const user = JSON.parse(localStorage.getItem("user") || "null");

        if (!user) {
            throw new Error("Session Expired!\nPlease Login")
        }

        setState((prev: any) => ({ ...prev, loading: true, error: "" }));

        const response = await getWishlistItems();
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Wishlist fetched successfully", wishlistItems: response.data.wishlist }));

        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            toast.show(error?.response?.data?.error?.message || "Failed to fetch Wishlist")
        } else {
            toast.show("Something went wrong. Please try again later");
        }
        console.error('Error fetching wishlist:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}

export const addAddress = async (address: AddressForm, handleClose: any, getAddresses: any, setState: any) => {
    try {
        const user = JSON.parse(localStorage.getItem("user") || "null");

        if (!user) {
            throw new Error("Session Expired!\nPlease Login")
        }

        setState((prev: any) => ({ ...prev, loading: true, error: "" }));

        console.log('id:', user.id);
        const response = await addUserAddress(address, user.id);
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Address Added Successfully" }));
            getAddresses();
            handleClose();
            toast.show("Address added successfully")
        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            toast.show(error?.response?.data?.error?.message || "Failed to add address")
        } else {
            toast.show("Something went wrong. Please try again later");
        }
        console.error('Error adding address:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}

export const addToWishlist = async (bookId: string, addToWishlistContext: (bookId: string) => void, setState: any) => {
    // console.log('categoryCode in action:', categoryCode);
    try {
        const user = JSON.parse(localStorage.getItem("user") || "null");

        if (!user) {
            throw new Error("Session Expired!\nPlease Login")
        }

        setState((prev: any) => ({ ...prev, loading: true, error: "" }));

        const response = await addItemToWishlist(bookId);
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Book Added to Wishlist" }));
            addToWishlistContext(bookId);
            toast.show("Book added to wishlist successfully")
        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            toast.show(error?.response?.data?.error?.message || "Failed to add book to wishlist")
        } else {
            toast.show("Something went wrong. Please try again later");
        }
        console.error('Error adding book to wishlist:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}

export const removeFromWishlist = async (bookId: string, removeFromWishlistContext: (bookId: string) => void, setState: any, getWishlist?: any, setWishlistState?: any) => {
    try {
        const user = JSON.parse(localStorage.getItem("user") || "null");

        if (!user) {
            throw new Error("Session Expired!\nPlease Login")
        }

        setState((prev: any) => ({ ...prev, loading: true, error: "" }));

        const response = await removeItemFromWishlist(bookId);
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Book Removed From Wishlist" }));
            removeFromWishlistContext(bookId);
            if (getWishlist) await getWishlist(setWishlistState);
            toast.show("Book removed from wishlist successfully")
        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            toast.show(error?.response?.data?.error?.message || "Failed to remove book from wishlist")
        } else {
            toast.show("Something went wrong. Please try again later");
        }
        console.error('Error removing book from wishlist:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}