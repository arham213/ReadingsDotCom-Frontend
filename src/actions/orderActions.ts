import { isAxiosError } from "axios";
import { getMyOrders } from "../services/orderService";
import toast from "../utils/toast";

export const getOrders = async (setState: any) => {
    try {
        const user = JSON.parse(localStorage.getItem("user") || "null");

        if (!user) {
            throw new Error("Session Expired!\nPlease Login")
        }

        setState((prev: any) => ({ ...prev, loading: true, error: "" }));

        const response = await getMyOrders();
        if (response?.success) {
            setState((prev: any) => ({ ...prev, success: "Orders fetched successfully", orders: response.data.orders }));

        } else {
            throw new Error(response?.error?.message);
        }
    } catch (error: any) {
        if (isAxiosError(error)) {
            toast.show(error?.response?.data?.error?.message || "Failed to fetch Orders")
        } else {
            toast.show("Something went wrong. Please try again later");
        }
        console.error('Error fetching Orders:', error);
        setState((prev: any) => ({ ...prev, error: error.message || "Something went wrong" }));
    } finally {
        setState((prev: any) => ({ ...prev, loading: false }));
    }
}