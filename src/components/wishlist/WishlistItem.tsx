import { useNavigate } from "react-router-dom";
import { Author } from "../../types/Author";
import Button from "../common/Button";
// import {  } from "../../actions/cartActions";
import { Book } from "../../types/Book";
import { useEffect, useState } from "react";
import { WishlistItemInternalState } from "../../types/User";
import { removeFromWishlist } from "../../actions/userActions";
import { addToCart, addToCartV2 } from "../../actions/cartActions";
import { useWishlist } from "../../context/WishlistContext";
import toast from "../../utils/toast";
import { useCart } from "../../context/CartContext";

const WishlistItem = ({ wishlistItem, getWishlist, setWishlistState }: { wishlistItem: Book, getWishlist: any, setWishlistState: any }) => {
    const { incrementCartItemCountContext } = useCart();
    const { removeFromWishlistContext } = useWishlist();
    const [state, setState] = useState<WishlistItemInternalState>({
        loading: false,
        success: '',
        error: ''
    })

    const book: Book = wishlistItem;

    const handleDeleteWishlistItem = async () => {
        await removeFromWishlist(book._id, removeFromWishlistContext, setState, getWishlist, setWishlistState);
    }

    const handleMoveToCart = async () => {
        const user = JSON.parse(localStorage.getItem("user") || "null");

        if (!user) {
            toast.show("Failed to move item to cart")
        }

        let price;
        if (book.discount > 0) {
            price = book.ourPriceAfterDiscount
        } else {
            price = book.ourPrice
        }

        await removeFromWishlist(book._id, removeFromWishlistContext, setState, getWishlist, setWishlistState);
        await addToCartV2(user.cart.cartId, book._id, 1, price, incrementCartItemCountContext, setState)
    }

    return (
        <section className="product-view-section product-page-section">
            <img src={book.imageUrl} alt={book.title} className="product-img" />
            <div className="content">
                <div className="product-details">
                    <p className="product-title">{book.title}</p>
                    <span className="format-and-prublication-year">[{book.format} - {book.publicationYear}]</span>
                    {book.authors && (
                        <div className="author-names">
                            {book.authors.map((author: Author, index) => {
                                if (index === book.authors.length - 1)
                                    return <span key={author._id} className="author-name">{author.name}</span>
                                return <span key={author._id} className="author-name">{author.name}, </span>
                            })}
                        </div>
                    )}
                    <span className="book-status">{book.status}</span>
                    <span className="list-price">List Price: {book.listPriceCurrency}{book.listPrice}</span>
                    {book.discount > 0 ? (
                        <>
                            <div className="our-price">
                                Our Price:
                                <span className="our-price-value">{book.ourPrice}</span>
                                <span className="our-price-after-discount">Rs.{book.ourPriceAfterDiscount}</span>
                            </div>
                            <span className="standard-discount">Standard Discount: {book.discount}%</span>
                            <span className="you-save">You Save: Rs.{book.youSave}</span>
                        </>
                    ) : (
                        <span className="our-price">Our Price: Rs.{book.ourPrice}</span>
                    )}
                    <div className="cart-item-action-buttons">
                        <Button text="Move to Cart" onClick={handleMoveToCart} />
                        <Button text="Delete" onClick={handleDeleteWishlistItem} />
                    </div>
                </div>
                {/* <div className="quantity-selectors">
                    <button className="decrement-button" onClick={() => handleUpdateWishlistItem(-1, wishlistItem.totalPrice/wishlistItem.quantity)}>-</button>
                    <span className="quantity">{wishlistItem.quantity}</span>
                    <button className="increment-button" onClick={() => handleUpdateWishlistItem(1, wishlistItem.totalPrice/wishlistItem.quantity)}>+</button>
                </div> */}
                {/* <span className="amount">{wishlistItem.totalPrice}</span> */}
            </div>
        </section>
    )
}

export default WishlistItem;