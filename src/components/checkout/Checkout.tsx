import { useEffect, useState } from "react";
import AddressItem from "./AddressItem";
import Payment from "./Payment";
import { CartState } from "../../types/Cart";
import OrderSummary from "./OrderSummary";
import { CheckoutState, OrderRequestBody } from "../../types/Checkout";
import { UserAddress } from "../../types/User";
import "../../assets/styles/checkout.css";
import { getUserAddresses } from "../../actions/userActions";
import Button from "../common/Button";
import { placeOrder } from "../../actions/checkoutActions";
import { clearCart, getCart } from "../../actions/cartActions";
import Address from "./Address";
import { useCart } from "../../context/CartContext";
import toast from "../../utils/toast";

const Checkout = ({ cart, setCartState, isOpen, handleClose }: { cart: CartState, setCartState: any, isOpen: boolean, handleClose: any }) => {
    const { clearCartItemCountContext } = useCart();
    const [isAddressOpen, setIsAddressOpen] = useState<boolean>(false);
    const [state, setState] = useState<CheckoutState>({
        email: '',
        addresses: null,
        selectedDeliveryAddress: null,
        selectedBillingAddress: null,
        isBillingSame: true,
        includeGiftWrap: false,
        includeInvoice: false,
        specialInstructions: ''
    })

    const getAddresses = async () => {
        await getUserAddresses(setState);
    }

    useEffect(() => {
        isOpen && getAddresses();
    }, [isOpen])

    const handleInputChange = (e: any) => {
        const { name, value, checked, type } = e.target;
        setState({
            ...state,
            [name]: type === "checkbox" ? checked : value
        })
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") || "null");
        setState((prev: CheckoutState) => ({
            ...prev,
            email: user?.email
        }))
    }, [])

    useEffect(() => {
        console.log('checkout state:', state);
    }, [state])

    const validateForm = () => {
        if (!state.email) return false;
        if (!state.selectedDeliveryAddress) return false;
        if (!state.isBillingSame && !state.selectedBillingAddress) return false;
        return true;
    }

    const handlePlaceOrder = async () => {
        if (!validateForm()) {
            toast.show('Please fill in the required fields to proceed');
            return;
        }

        const requestBody: OrderRequestBody = {
            deliveryAddressId: state.selectedDeliveryAddress?._id || '',
            billingAddressId: (state.isBillingSame ? state.selectedDeliveryAddress?._id : state.selectedBillingAddress?._id) || '',
            includeGiftWrap: state.includeGiftWrap,
            includeInvoice: state.includeInvoice,
            specialInstructions: state.specialInstructions,
            itemCount: cart.itemCount,
            totalQuantity: cart.totalQuantity,
            subTotal: cart.subTotal,
            shippingCharges: 150,
            orderItems: cart.cartItems
        }

        await placeOrder(requestBody, setState, async () => {
            handleClose();
            const user = JSON.parse(localStorage.getItem("user") || '');
            console.log('user:', user);
            await clearCart(user?.cart?.cartId, setState, getCart, setCartState)
            clearCartItemCountContext();
        });
    }

    const handleAddressOpen = () => {
        console.log('opeining address modal:', isAddressOpen)
        setIsAddressOpen(!isAddressOpen);
    }

    const closeModal = () => {
        isAddressOpen && setIsAddressOpen(false)
        handleClose()
    }

    useEffect(() => {
        console.log('isAddressOpen:', isAddressOpen);
    }, [isAddressOpen])

    if (!isOpen) return null;

    return (
        <div className="checkout-modal">
            <div className="checkout-container">
                <button className="close-btn" onClick={closeModal}>&times;</button>
                <div className="content">
                    {!isAddressOpen ? (
                        <div className="checkout-details">
                            <div className="user-email">
                                <p className="heading">Checkout</p>
                                <input type="email" className="email" name="email" value={state.email} placeholder="Email" disabled={true} />
                            </div>
                            <div className="shipping-address">
                                <p className="heading">Delivery</p>
                                {state.addresses && (
                                    <div className="addresses delivery-addresses">
                                        {state.addresses.map((address: UserAddress) =>
                                            <AddressItem
                                                key={address._id}
                                                address={address}
                                                state={state}
                                                setState={setState}
                                                type="selectedDeliveryAddress"
                                            />
                                        )}
                                    </div>
                                )}
                                <a className="heading" onClick={() => setIsAddressOpen(!isAddressOpen)}>Add New Address +</a>
                                {state.isBillingSame ? (
                                    <div className="same-billing-address">
                                        <input type="checkbox" name="isBillingSame" checked={state.isBillingSame} onChange={handleInputChange} />
                                        <span className="text">My Billing Address is the same as shipping address</span>
                                    </div>
                                ) : (
                                    <>
                                        <p className="heading">Billing</p>
                                        {state.addresses && (
                                            <div className="addresses billing-addresses">
                                                {state.addresses
                                                    ?.filter((address: UserAddress) => address._id != state.selectedDeliveryAddress?._id)
                                                    .map((address: UserAddress) =>
                                                        <AddressItem
                                                            key={address._id}
                                                            address={address}
                                                            state={state}
                                                            setState={setState}
                                                            type="selectedBillingAddress"
                                                        />
                                                    )
                                                }
                                            </div>
                                        )}
                                        <a className="heading" onClick={handleAddressOpen}>Add Billing Address +</a>
                                        <div className="same-billing-address">
                                            <input type="checkbox" name="isBillingSame" checked={state.isBillingSame} onChange={handleInputChange} />
                                            <span className="text">My Billing Address is the same as shipping address</span>
                                        </div>
                                    </>
                                )}
                            </div>
                            <Payment />
                            <Button text="Place Order" classNames={"place-order-button"} onClick={handlePlaceOrder} />
                        </div>
                    ) : (
                        <div className="address-form-container">
                            <p className="heading">Add Address</p>
                            <Address
                                handleClose={handleAddressOpen}
                                getAddresses={getAddresses}
                            />
                        </div>
                    )}
                    <OrderSummary
                        cart={cart}
                        state={state}
                        setState={setState}
                    />
                </div>
            </div>
        </div>
    )
}

export default Checkout;