export const API_ENDPOINTS = {
    AUTH: {
        REGISTER: "/users/signup",
        VERIFY_EMAIL: "/users/verifyEmail",
        RESEND_OTP: (userId: string) => `users/${userId}/resendOTP`,
        LOGIN: "/users/login",
    },
    USER: {
        GET_WISHLIST: '/users/wishlistItems',
        ADD_TO_WISHLIST: (bookId: string) => `/users/wishlist/${bookId}`,
        REMOVE_FROM_WISHLIST: '/users/wishlist'
    },
    ADDRESSES: {
        GET_ADDRESSES: (userId: string) => `/addresses/user/${userId}`,
        ADD_ADDRESS: (userId: string) => `/addresses/user/${userId}`
    },
    CART: {
        GET_CART: "/cart",
        ADD_TO_CART: "/cart",
        UPDATE_CART_ITEM: "/cart",
        DELETE_CART_ITEM: "/cart",
        CLEAR_CART: '/cart/clear-cart'
    },
    CATEGORY: {
        GET_CATEGORIES: "/categories",
    },
    BOOK: {
        GET_BOOKS_BY_CATEGORY: (categoryCode: Number) => `/books/category/${categoryCode}`,
        GET_BOOKS_BY_AUTHOR: (authorId: string) => `/books/author/${authorId}`,
        GET_BOOK: (bookId: string) => `/books/${bookId}`,
        SEARCH: (searchString: string) => `/books/search?searchString=${searchString}`,
        ADVANCED_SEARCH: (queryParams: string) => `/books/advanced-search${queryParams}`
    },
    ORDER: {
        GET_ORDERS: 'orders/myOrders',
        PLACE_ORDER: '/orders/placeOrder',
    }
}