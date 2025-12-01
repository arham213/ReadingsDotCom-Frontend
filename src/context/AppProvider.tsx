import { AuthProvider } from "./AuthContext"
import { CartProvider } from "./CartContext"
import { WishlistProvider } from "./WishlistContext"

export const AppProvider = ({ children }: { children: any }) => {
    return (
        <AuthProvider>
            <CartProvider>
                <WishlistProvider>
                    {children}
                </WishlistProvider>
            </CartProvider>
        </AuthProvider>
    )
}