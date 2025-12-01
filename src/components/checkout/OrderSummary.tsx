import { CartItemState, CartState } from "../../types/Cart";
import { OrderSummaryState } from "../../types/Checkout";
import OrderItem from "./OrderItem";

const OrderSummary = ({ cart, state, setState }: OrderSummaryState) => {
    const handleInputChange = (e: any) => {
        const { name, value, checked, type } = e.target;
        setState({
            ...state,
            [name]: type === "checkbox" ? checked : value
        })
    }

    return (
        <div className="order-summary">
            <div className="order-items">
                {cart.cartItems && (
                    cart.cartItems.map((cartItem: CartItemState) => <OrderItem key={cartItem.bookId._id} orderItem={cartItem} />)
                )}
            </div>

            <div className="add-ons">
                <div className="item gift-wrap">
                    <input type="checkbox" name="includeGiftWrap" checked={state.includeGiftWrap} onChange={handleInputChange} />
                    <span className="text">Gift Wrap</span>
                </div>
                <div className="item include-invoice">
                    <input type="checkbox" name="includeInvoice" checked={state.includeInvoice} onChange={handleInputChange} />
                    <span className="text">Include Invoice</span>
                </div>
            </div>

            <input type="text" name="specialInstructions" value={state.specialInstructions} className="special-instructions" placeholder="Special Instructions" onChange={handleInputChange} />

            <div className="pricing-details">
                <div className="item">
                    <span className="text">Subtotal</span>
                    <span className="amount">Rs.{cart.subTotal}</span>
                </div>
                <div className="item">
                    <span className="text">Standard Shipping</span>
                    <span className="amount">Rs.150</span>
                </div>
            </div>

            <div className="total-amount">
                <span className="heading text">Total</span>
                <span className="heading amount">Rs.{cart.subTotal + 150}</span>
            </div>
        </div>
    )
}

export default OrderSummary;