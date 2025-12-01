import { CartState } from "./Cart"
import { OrderItemState } from "./Order"
import { UserAddress } from "./User"

export type CheckoutState = {
    email: string,
    addresses: UserAddress[] | null,
    selectedDeliveryAddress: UserAddress | null,
    selectedBillingAddress: UserAddress | null,
    isBillingSame: boolean,
    includeGiftWrap: boolean,
    includeInvoice: boolean,
    specialInstructions: string
}

export type OrderSummaryState = {
    cart: CartState,
    state: CheckoutState,
    setState: any
}

export type OrderRequestBody = {
    deliveryAddressId: string,
    billingAddressId: string,
    includeGiftWrap: boolean,
    includeInvoice: boolean,
    specialInstructions: string,
    itemCount: Number,
    totalQuantity: Number,
    subTotal: Number,
    shippingCharges: Number,
    orderItems: OrderItemState[]
}