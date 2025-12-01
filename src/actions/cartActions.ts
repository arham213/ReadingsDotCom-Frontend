import { isAxiosError } from "axios";
import { addProductToCart, clearCartItems, deleteItemFromCart, getUserCart, updateItemInCart } from "../services/cartServices";
import { AddToCartRequestBody, CartItemState, DeleteCartItemRequestBody, UpdateCartRequestBody } from "../types/Cart";

export const getCart = async (setState: any) => {
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));
        const response = await getUserCart();
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Cart fetched successfully", cart: response.data.cart }));
            // window.alert('Book Added To Cart');
        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            window.alert(error?.response?.data?.error?.message || "Failed to fetch Cart")
        } else {
            window.alert("Something went wrong. Please try again later");
        }
        console.error('Error fetching cart:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}

export const addToCart = async (cartId: string, bookId: string, quantity: Number, price: Number, incrementCartItemCountContext: any, setState: any) => {
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));
        const requestBody: AddToCartRequestBody = {
            cartId: cartId,
            bookId: bookId,
            quantity: quantity,
            price: price
        }
        const response = await addProductToCart(requestBody);
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Book Added To Cart", cartItemCount: response.data.cartItemCount }));
            incrementCartItemCountContext();
            window.alert('Book Added To Cart');
        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            window.alert(error?.response?.data?.error?.message || "Failed to Add Book to Cart")
        } else {
            window.alert("Something went wrong. Please try again later");
        }
        console.error('Error adding book to cart:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}

export const addToCartV2 = async (cartId: string, bookId: string, quantity: Number, price: Number, incrementCartItemCountContext: () => void, setState: any) => {
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));
        const requestBody: AddToCartRequestBody = {
            cartId: cartId,
            bookId: bookId,
            quantity: quantity,
            price: price
        }
        const response = await addProductToCart(requestBody);
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Book Added To Cart"}));
            incrementCartItemCountContext();
            window.alert('Book Added To Cart');
        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            window.alert(error?.response?.data?.error?.message || "Failed to Add Book to Cart")
        } else {
            window.alert("Something went wrong. Please try again later");
        }
        console.error('Error adding book to cart:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}

export const updateCartItem = async (cartId: string, bookId: string, quantity: Number, price: Number, updateCartItemCountContext: (itemCount: number) => void, setState: any, getCart: any, setCartState: any,) => {
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));
        const requestBody: UpdateCartRequestBody = {
            cartId,
            bookId,
            quantity,
            price
        }
        const response = await updateItemInCart(requestBody);
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Book Updated", cartItemCount: response.data.cartItemCount }));
            
            // const user = JSON.parse(localStorage.getItem('user') || "null");
            // if (user) {
            //     user.cart.cartItemCount = response.data.cartItemCount;
            //     localStorage.setItem('user', JSON.stringify(user));
            // }

            updateCartItemCountContext(response.data?.cartItemCount);

            await getCart(setCartState);

            window.alert('Book Updated');
        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            window.alert(error?.response?.data?.error?.message || "Failed to Update Item")
        } else {
            window.alert("Something went wrong. Please try again later");
        }
        console.error('Error updating cart item:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}

export const deleteCartItem = async (cartId: string, bookId: string, decrementCartItemCountContext: () => void, setState: any, getCart: any, setCartState: any) => {
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));
        const requestBody: DeleteCartItemRequestBody = {
            cartId,
            bookId,
        }
        const response = await deleteItemFromCart(requestBody);
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Book Deleted from Cart", cartItemCount: response.data.cartItemCount }));
            
            // const user = JSON.parse(localStorage.getItem('user') || "null");
            // if (user) {
            //     user.cart.cartItemCount = response.data.cartItemCount;
            //     localStorage.setItem('user', JSON.stringify(user));
            // }

            decrementCartItemCountContext();

            await getCart(setCartState);

            window.alert('Book Deleted from Cart');
        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            window.alert(error?.response?.data?.error?.message || "Failed to Delete Item")
        } else {
            window.alert("Something went wrong. Please try again later");
        }
        console.error('Error deleting item from cart:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}

export const clearCart = async (cartId: string, setState: any, getCart: any, setCartState: any) => {
    console.log('cartId:', cartId);
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));
        const response = await clearCartItems(cartId);
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Cart cleared successfully" }));
            
            const user = JSON.parse(localStorage.getItem('user') || "null");
            if (user) {
                user.cart.cartItemCount = 0;
                localStorage.setItem('user', JSON.stringify(user));
            }

            await getCart(setCartState);
        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            window.alert(error?.response?.data?.error?.message || "Failed to clear cart")
        } else {
            window.alert("Something went wrong. Please try again later");
        }
        console.error('Error clearing cart:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}