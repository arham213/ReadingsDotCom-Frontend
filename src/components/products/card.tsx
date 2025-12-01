import { Author } from "../../types/Author";
import { Book } from "../../types/Book";
import shareIcon from "../../assets/images/share-icon.png";
import heartIcon from "../../assets/images/heart-icon.png";
// import FilledHeartIcon from "../../assets/images/filled-heart-icon.PNG";
import rightArrow from "../../assets/images/right-arrow.png";
import cartIcon from "../../assets/images/cart-icon.png";
import "../../assets/styles/products/card.css"
import { addToCart } from "../../actions/cartActions";
import { useEffect, useState } from "react";
import { addToWishlist, removeFromWishlist } from "../../actions/userActions";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";

interface ProductCardProps {
    product: Book;
}

interface ProductCardState {
    cartItemCount: Number | null,
    isIncludedInWishlist: Boolean,
    loading: Boolean,
    success: string,
    error: string
}


const Card = ({ product }: ProductCardProps) => {
    const { user } = useAuth();
    const { incrementCartItemCountContext } = useCart();
    const { addToWishlistContext, removeFromWishlistContext } = useWishlist();
    const [state, setState] = useState<ProductCardState>({
        cartItemCount: null,
        isIncludedInWishlist: false,
        loading: false,
        success: '',
        error: ''
    })

    const handleAddToCart = async () => {
        const user = JSON.parse(localStorage.getItem('user') || "null");

        if (!user) {
            window.alert("Please login first to add book to the cart")
            return;
        }

        let price;
        if (product.discount > 0) {
            price = product.ourPriceAfterDiscount
        } else {
            price = product.ourPrice
        }

        await addToCart(user?.cart?.cartId, product._id, 1, price, incrementCartItemCountContext, setState)
    }

    const handleAddToWishlist = async () => {
        const user = JSON.parse(localStorage.getItem('user') || "null");

        if (!user) {
            window.alert("Please login first to add book to the cart")
            return;
        }

        await addToWishlist(product._id, addToWishlistContext, setState);
    }

    const handleDeleteWishlistItem = async () => {
        await removeFromWishlist(product._id, removeFromWishlistContext, setState);
    }

    // useEffect(() => {
    //     // console.log('state:', state);
    //     if (!!state.cartItemCount) {
    //         const user = JSON.parse(localStorage.getItem('user') || "null");
    //         console.log('updating cart item count')
    //         if (user) {
    //             user.cart.cartItemCount = state.cartItemCount;
    //             localStorage.setItem('user', JSON.stringify(user));
    //         }
    //     }
    // }, [state])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") || "null");
        if (user && user.wishlistItems.includes(product._id)) {
            setState({
                ...state,
                isIncludedInWishlist: true
            })
        }
    }, [])

    return (
        <article className="product-card">
            <a href={`/product/${product._id}`}>
                <div className="card-img">
                    <img src={product.imageUrl} alt={product.title} />
                </div>

                <div className="card-content">
                    <span className="product-title">{product.title}</span>
                    <div className="author-names">
                        {product.authors.map((author: Author, index: number) => {
                            if (index === product.authors.length - 1) {
                                return <span key={author._id}>{author.name}</span>
                            }
                            return <span key={author._id}>{author.name}, </span>
                        })}
                    </div>
                    <span className="status-badge">{product.status}</span>
                    <span className="status-message">{product.statusMessage}</span>
                    <span className="list-price">List Price: {product.listPriceCurrency}{product.listPrice}</span>
                    {product.discount > 0 ? (
                        <>
                            <div className="our-price">
                                Our Price:&nbsp;
                                <span className="our-price-value">{product.ourPrice}</span>
                                <span className="our-price-after-discount">  Rs.{product.ourPriceAfterDiscount}</span>
                            </div>
                            <span className="standard-discount">Discount: {product.discount}%</span>
                            <span className="you-save">You Save: Rs.{product.youSave}</span>
                        </>
                    ) : (
                        <span className="our-price-value">Our Price: Rs.{product.ourPrice}</span>
                    )}
                </div>
            </a>
            <div className="card-footer">
                <img src={shareIcon} alt="Share Icon" />
                {user?.wishlistItems?.includes(product._id) ? <img src={rightArrow} alt="Wishlist Icon" className="add-to-wishlist" onClick={handleDeleteWishlistItem} /> : (
                    <img src={heartIcon} alt="Wishlist Icon" className="add-to-wishlist" onClick={handleAddToWishlist} />
                )}
                {product.status === "In Stock" || product.inStock > 0 && (
                    <img src={cartIcon} alt="Cart Icon" className="add-to-cart" onClick={handleAddToCart} />

                )}
            </div>
            {/* </a> */}
        </article>
    )
}

export default Card;