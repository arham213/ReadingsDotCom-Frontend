import { Book } from "./Book"

export type UserAddress = {
    _id: string,
    userId: string,
    address: string,
    country: string,
    state: string,
    city: string,
    zipCode: string,
    contactNo: string
}

export type AddressForm = {
    address: string,
    country: string,
    state: string,
    city: string,
    zipCode: string,
    contactNo: string
}

export type WishlistPageState = {
    wishlistItems: Book[],
    loading: Boolean,
    success: string,
    error: string
}

export type WishlistItemInternalState = {
    loading: Boolean,
    success: string,
    error: string
}

export type WishlistContextState = {
    addToWishlistContext: (bookId: string) => void;
    removeFromWishlistContext: (bookId: string) => void;
}