import { useEffect, useState } from "react";
import { getWishlist } from "../actions/userActions";
import { WishlistPageState } from "../types/User";
import { Book } from "../types/Book";
import WishlistItem from "../components/wishlist/WishlistItem";

const Wishlist = () => {
    const [state, setState] = useState<WishlistPageState>({
        wishlistItems: [],
        loading: false,
        success: '',
        error: ''
    })

    const getWishlistItems = async () => {
        await getWishlist(setState);
    }

    useEffect(() => {
        getWishlistItems();
    }, [])

    useEffect(() => {
        console.log('state:', state);
    }, [state])

    return (
        <>
            {state.loading ? <p>Loading...</p> : (
                state.wishlistItems?.length > 0 ? (
                    state.wishlistItems?.map((wishlistItem: Book) => 
                        <WishlistItem
                            key={wishlistItem._id}
                            wishlistItem={wishlistItem}
                            getWishlist={getWishlistItems}
                            setWishlistState={setState}
                        />
                    )
                ) : (
                    <p>Wishlist is empty!</p>
                )
            )}
        </>
    )
}

export default Wishlist;