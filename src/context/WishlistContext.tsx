import { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";
import { WishlistContextState } from "../types/User";

const WishlistContext = createContext<WishlistContextState | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: any }) => {
    const { user, setUser } = useAuth();

    const addToWishlistContext = (bookId: string) => {
        if (user?.wishlistItems?.includes(bookId)) {
            window.alert("Already added to wishlist");
        }

        const wishlist = user?.wishlistItems || [];
        const updatedWishlist = [...wishlist, bookId]

        setUser({
            ...user,
            wishlistItems: [...updatedWishlist, bookId]
        })

        const updatedUser = {...user, wishlistItems: updatedWishlist}

        localStorage.setItem("user", JSON.stringify(updatedUser));
    }

    const removeFromWishlistContext = (bookId: string) => {
        const wishlistItems = user?.wishlistItems || [];
        const updatedWishlist = wishlistItems.filter((wishlistItem) => wishlistItem !== bookId);

        setUser({
            ...user,
            wishlistItems: updatedWishlist
        })

        const updatedUser = {...user, wishlistItems: updatedWishlist}

        console.log("updatedUser:", updatedUser);

        localStorage.setItem("user", JSON.stringify(updatedUser));
    }

    return (
        <WishlistContext.Provider value={{ addToWishlistContext, removeFromWishlistContext }}>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => {
    const wishlistContext = useContext(WishlistContext);
    if (!wishlistContext) throw new Error("useWishlist must be used inside WishlistProvider");
    return wishlistContext;
}