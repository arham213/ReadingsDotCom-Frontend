import { Book } from "./Book"
import { UserAddress } from "./User"

export type OrderItemState = {
    bookId: Book,
    quantity: number,
    totalPrice: number
}

export type Order = {
    _id: string,
    userId: string,
    orderNo: number,
    deliveryAddressId: UserAddress,
    billingAddressId: UserAddress,
    itemCount: 2,
    totalQuantity: 3,
    includeGiftWrap: boolean,
    includeInvoice: boolean,
    specialInstructions: string,
    subTotal: number,
    shippingCharges: number,
    total: number,
    paymentMethod: string,
    orderItems: OrderItemState[],
    status: string,
    createdAt: string,
    updatedAt: string
}

export type OrderPageState = {
    orders: Order[],
    loading: boolean,
    success: string,
    error: string
}