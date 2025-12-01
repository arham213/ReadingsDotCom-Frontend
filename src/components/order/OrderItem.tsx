import { Order, OrderItemState } from "../../types/Order";

const OrderDetails = ( { order }: { order: Order}) => {
    return (
        <div className="order-details">
            {order?.orderItems.map((orderItem: OrderItemState) => (
                <div>
                    <p className="order-item">{orderItem.quantity} x {orderItem.bookId.title} ({orderItem.bookId.ISBN})</p>
                    <p className="order-recieved">Order Recieved</p>
                </div>
            ))}
        </div>
    )
}

export default OrderDetails;