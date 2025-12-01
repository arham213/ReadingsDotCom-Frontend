export interface User {
    fname: string,
    lname: string,
    email: string,
    contactNo: string,
    password: string
}

export type StoredUser = {
    id: string,
    name: string,
    email: string,
    token: string,
    cart: {
        cartId: string,
        cartItemCount: number
    },
    wishlistItems: string[]
}

export type AuthState = {
    user: StoredUser | null,
    setUser: any,
    login: (user: StoredUser) => void,
    logout: () => void
}