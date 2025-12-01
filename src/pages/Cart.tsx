import { useEffect, useState } from "react";
import { CartItemState, CartPageState } from "../types/Cart";
import { getCart } from "../actions/cartActions";
import CartItem from "../components/cart/CartItem";
import Button from "../components/common/Button";
import "../assets/styles/cart.css"
import Checkout from "../components/checkout/Checkout";

const Cart = () => {
    const [state, setState] = useState<CartPageState>({
        cart: null,
        loading: false,
        success: '',
        error: ''
    })

    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState<boolean>(false);

    useEffect(() => {
        getCart(setState);
    }, [])

    useEffect(() => {
        console.log('state:', state);
        console.log('isCheckoutModalOpen:', isCheckoutModalOpen);
    }, [state, isCheckoutModalOpen])

    return (
        <>
            <h2 className="page-heading">Orders Cart</h2>
            {state.cart && state.cart.cartItems?.length > 0 ? (
                <div className="cart-page-content">
                    {state.cart?.cartItems?.map((cartItem: CartItemState) => (
                        <CartItem key={cartItem.bookId._id} cartItem={cartItem} getCart={getCart} cartState={state} setCartState={setState} />
                    ))}

                    <div className="cart-page-footer">
                        <div className="details">
                            <div className="item-count item">
                                <span className="text">Items</span>
                                <span className="count">{state.cart?.itemCount}</span>
                            </div>
                            <div className="total-quantity item">
                                <span className="text">Total Qty</span>
                                <span className="quantity">{state.cart?.totalQuantity}</span>
                            </div>
                            <div className="sub-total item">
                                <span className="text">Sub Total</span>
                                <span className="amount">{state.cart?.subTotal}</span>
                            </div>
                        </div>
                        <div className="action-buttons">
                            <Button text="Continue Shopping" />
                            <Button text="Checkout" onClick={() => setIsCheckoutModalOpen(true)} />
                        </div>
                    </div>

                    <Checkout 
                        cart={state.cart}
                        setCartState={setState}
                        isOpen={isCheckoutModalOpen}
                        handleClose={() => setIsCheckoutModalOpen(false)}
                    />
                </div>
            ) : (<p className="cart-empty">Your Cart is empty!</p>)}
        </>
    )
}

export default Cart;