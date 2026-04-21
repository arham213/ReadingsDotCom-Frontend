import { isAxiosError } from "axios";
import { placeOrderForUser } from "../services/checkoutService";
import { OrderRequestBody } from "../types/Checkout";
import toast from "../utils/toast";

export const placeOrder = async (requestBody: OrderRequestBody, setState: any, callback: any) => {
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));
        const response = await placeOrderForUser(requestBody);
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Order placed successfully"}));
            callback();
            toast.show('Order placed successfully');
        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            toast.show(error?.response?.data?.error?.message || "Failed to place order")
        } else {
            toast.show("Something went wrong. Please try again later");
        }
        console.error('Error placing order:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}