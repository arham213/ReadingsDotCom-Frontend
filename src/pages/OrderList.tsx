import { useEffect, useState } from "react";
import { Order, OrderItemState, OrderPageState } from "../types/Order";
import { getOrders } from "../actions/orderActions";
import rightArrow from "../assets/images/right-arrow.png";
import OrderDetails from "../components/order/OrderItem";
import "../assets/styles/order.css"

const OrderList = () => {
    const [state, setState] = useState<OrderPageState>({
        orders: [],
        loading: false,
        success: "",
        error: ""
    })

    useEffect(() => {
        getOrders(setState);
    }, [])

    useEffect(() => {
        console.log("state:", state);
    }, [state])

    const orders = state?.orders;
    return (
        <div className="orders">
            <div className="order-categories">
                <div className="last-order">
                    <div className="category-header">
                        <img src={rightArrow} alt="" />
                        <p>Last Order</p>
                    </div>
                    <div className="orders-list">
                        <div className="order">
                            <div className="order-header">
                                <p className="order-no">Order No. {orders[0]?.orderNo}</p>
                                <p className="order-date">{orders[0]?.createdAt}</p>
                                <div className="action-buttons">
                                    <a>
                                        View
                                        <img src={rightArrow} alt="" />
                                    </a>
                                </div>
                            </div>
                            <OrderDetails order={orders[0]} />
                        </div>
                    </div>
                </div>
                <div className="in-process-orders">
                    <div className="category-header">
                        <img src={rightArrow} alt="" />
                        <p>In Process</p>
                    </div>
                    <div className="orders-list">
                        {orders.map((order: Order) => (
                            <div className="order">
                                <div className="order-header">
                                    <p className="order-no">Order No. {order?.orderNo}</p>
                                    <p className="order-date">{order?.createdAt}</p>
                                    <div className="action-buttons">
                                        <a>
                                            View
                                            <img src={rightArrow} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <OrderDetails order={order} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="order-histtory">
                    <div className="category-header">
                        <img src={rightArrow} alt="" />
                        <p>Order History</p>
                    </div>
                    <div className="orders-list">
                        {orders.map((order: Order) => (
                            <div className="order">
                                <div className="order-header">
                                    <p className="order-no">Order No. {order?.orderNo}</p>
                                    <p className="order-date">{order?.createdAt}</p>
                                    <div className="action-buttons">
                                        <a>
                                            View
                                            <img src={rightArrow} alt="" />
                                        </a>
                                    </div>
                                </div>
                                <OrderDetails order={order} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderList;