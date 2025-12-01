import { useNavigate } from "react-router-dom";
import { Author } from "../../types/Author";
import { CartItemInternalState, CartItemState } from "../../types/Cart";
import Button from "../common/Button";
import { deleteCartItem, updateCartItem } from "../../actions/cartActions";
import { Book } from "../../types/Book";
import { useEffect, useState } from "react";
import { addToWishlist } from "../../actions/userActions";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

const CartItem = ({ cartItem, getCart, cartState, setCartState }: { cartItem: CartItemState, getCart: any, cartState: any, setCartState: any }) => {
    const navigate = useNavigate();
    const { updateCartItemCountContext, decrementCartItemCountContext } = useCart();
    const { addToWishlistContext } = useWishlist();
    const [state, setState] = useState<CartItemInternalState>({
        cartItemCount: null,
        loading: false,
        success: '',
        error: ''
    })

    const book: Book = cartItem.bookId;

    const handleDeleteCartItem = async () => {
        console.log('deleting cart item')
        const user = JSON.parse(localStorage.getItem("user") || "null");

        if (!user) {
            window.alert('Session Expired!\nPlease Login to proceed');
            navigate("/login");
        }

        await deleteCartItem(user?.cart?.cartId, book._id, decrementCartItemCountContext, setState, getCart, setCartState);
    }

    const handleUpdateCartItem = async (quantity: Number, price: Number) => {
        console.log('updating cart item')
        const user = JSON.parse(localStorage.getItem("user") || "null");

        if (!user) {
            window.alert('Session Expired!\nPlease Login to proceed');
            navigate("/login");
        }

        await updateCartItem(user?.cart?.cartId, book._id, quantity, price, updateCartItemCountContext, setState, getCart, setCartState);
    }

    const handleMoveToWishlist = async () => {
        await handleDeleteCartItem();
        await addToWishlist(book._id, addToWishlistContext, setState);
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
                        <Button text="Move to Wishlist" onClick={handleMoveToWishlist} />
                        <Button text="Delete" onClick={handleDeleteCartItem} />
                    </div>
                </div>
                <div className="quantity-selectors">
                    <button className="decrement-button" onClick={() => handleUpdateCartItem(-1, cartItem.totalPrice / cartItem.quantity)}>-</button>
                    <span className="quantity">{cartItem.quantity}</span>
                    <button className="increment-button" onClick={() => handleUpdateCartItem(1, cartItem.totalPrice / cartItem.quantity)}>+</button>
                </div>
                <span className="amount">{cartItem.totalPrice}</span>
            </div>
        </section>
    )
}

export default CartItem;