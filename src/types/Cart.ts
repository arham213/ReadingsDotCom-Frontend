import { Book } from "./Book"

export type AddToCartRequestBody = {
    cartId: string,
    bookId: string,
    quantity: Number,
    price: Number
}

export type UpdateCartRequestBody = {
    cartId: string,
    bookId: string,
    quantity: Number,
    price: Number
} 

export type DeleteCartItemRequestBody = {
    cartId: string,
    bookId: string,
}

export type CartPageState = {
    cart: CartState | null,
    loading: Boolean,
    success: string,
    error: string
}

export type CartItemInternalState = {
    cartItemCount: Number | null,
    loading: Boolean,
    success: string,
    error: string
}

export type CartItemState = {
    bookId: Book,
    quantity: number,
    totalPrice: number
}

export type CartState = {
    _id: string,
    userId: string,
    itemCount: number,
    totalQuantity: number,
    subTotal: number,
    cartItems: CartItemState[]
    createdAt: Date,
    updatedAt: Date
}

export type CartContextState = {
    incrementCartItemCountContext: () => void,
    updateCartItemCountContext: (itemCount: number) => void,
    decrementCartItemCountContext: () => void,
    clearCartItemCountContext: () => void
}