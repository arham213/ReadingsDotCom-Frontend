import { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";
import { StoredUser } from "../types/auth";
import { CartContextState } from "../types/Cart";

const CartContext = createContext<CartContextState | undefined>(undefined);

export const CartProvider = ({ children }: { children: any }) => {
    const { setUser } = useAuth();

    const incrementCartItemCountContext = () => {
        setUser((prev: StoredUser) => ({
            ...prev,
            cart: {
                cartItemCount: prev.cart.cartItemCount + 1
            }
        }))

        const user = JSON.parse(localStorage.getItem('user') || "null");
        if (user) {
            user.cart.cartItemCount += 1;
            localStorage.setItem('user', JSON.stringify(user));
        }
    }

    const updateCartItemCountContext = (itemCount: number) => {
        setUser((prev: StoredUser) => ({
            ...prev,
            cart: {
                cartItemCount: itemCount + 1
            }
        }))

        const user = JSON.parse(localStorage.getItem('user') || "null");
        if (user) {
            user.cart.cartItemCount = itemCount;
            localStorage.setItem('user', JSON.stringify(user));
        }
    }

    const decrementCartItemCountContext = () => {
        setUser((prev: StoredUser) => ({
            ...prev,
            cart: {
                cartItemCount: prev.cart.cartItemCount - 1
            }
        }))

        const user = JSON.parse(localStorage.getItem('user') || "null");
        if (user) {
            user.cart.cartItemCount += 1;
            localStorage.setItem('user', JSON.stringify(user));
        }
    }

    const clearCartItemCountContext = () => {
        setUser((prev: StoredUser) => ({
            ...prev,
            cart: {
                cartItemCount: 0
            }
        }))

        const user = JSON.parse(localStorage.getItem('user') || "null");
        if (user) {
            user.cart.cartItemCount = 0;
            localStorage.setItem('user', JSON.stringify(user));
        }
    }

    return (
        <CartContext.Provider value={{ incrementCartItemCountContext, updateCartItemCountContext, decrementCartItemCountContext, clearCartItemCountContext }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const cartContext = useContext(CartContext);
    if (!cartContext) throw new Error("useCart must be used inside CartProvider");
    return cartContext;
}