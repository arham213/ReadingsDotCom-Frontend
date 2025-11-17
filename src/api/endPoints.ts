export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: "/users/login",
        REGISTER: "users/signup"
    },
    CATEGORY: {
        GET_CATEGORIES: "/categories",
        // GET_CATEGORY_BOOKS: (categoryCode: string) => `/categories/${categoryCode}/books`
        GET_CATEGORY_BOOKS: (categoryCode: Number) => `/books/${categoryCode}`
    }
}