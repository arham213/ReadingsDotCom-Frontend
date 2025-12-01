import { isAxiosError } from "axios";
import { placeOrderForUser } from "../services/checkoutService";
import { OrderRequestBody } from "../types/Checkout";

export const placeOrder = async (requestBody: OrderRequestBody, setState: any, callback: any) => {
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));
        const response = await placeOrderForUser(requestBody);
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Order placed successfully"}));
            callback();
            window.alert('Order placed successfully');
        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            window.alert(error?.response?.data?.error?.message || "Failed to place order")
        } else {
            window.alert("Something went wrong. Please try again later");
        }
        console.error('Error placing order:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}