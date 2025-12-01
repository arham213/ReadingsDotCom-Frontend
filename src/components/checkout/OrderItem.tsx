import { Author } from "../../types/Author";
import { CartItemState } from "../../types/Cart";

const OrderItem = ({ orderItem }: { orderItem: CartItemState }) => {
    return (
        <div className="order-item">
            <div className="img-container">
                <img src={orderItem.bookId?.imageUrl} alt={orderItem.bookId?.title} className="item-img" />
                <span className="quantity-pill">{orderItem.quantity}</span>
            </div>
            <div className="details">
                <span className="title">{orderItem.bookId.title.length > 12 ? orderItem.bookId?.title.slice(0, 12) + '...' : orderItem.bookId.title}</span>
                {orderItem.bookId?.authors && (
                    <div className="author-names">
                        {orderItem.bookId?.authors.map((author: Author, index: number) => {
                            if (index == orderItem.bookId?.authors.length - 1)
                                return <span key={author._id} className="name">{author.name}</span>
                            return <span key={author._id} className="name">{author.name}, </span>
                        })}
                    </div>
                )}
                <span className="item-status">{orderItem.bookId?.status}</span>
            </div>
            <div className="amount">Rs. {orderItem.totalPrice}</div>
        </div>
    )
}

export default OrderItem;