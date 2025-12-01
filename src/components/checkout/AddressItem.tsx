import { CheckoutState } from "../../types/Checkout";
import { UserAddress } from "../../types/User";

const AddressItem = ({ address, state, setState, type }: { address: UserAddress, state: CheckoutState, setState: any, type: "selectedDeliveryAddress" | "selectedBillingAddress" }) => {
    const handleClick = () => {
        setState((prev: CheckoutState) => ({
            ...prev,
            [type]: address
        }))
    }

    const selectedAddress = state[type];
    const selectedId = selectedAddress?._id

    return (
        <div className="address-section">
            <div className="header">
                <p className="address">{address.address}</p>
                <input type="checkbox" name={type} onChange={handleClick} checked={selectedId === address._id}/>
            </div>
            <p className="city-and-country">{address.city}, {address.country}</p>
            <p className="contact-no">{address.contactNo}</p>
        </div>
    )
}

export default AddressItem;