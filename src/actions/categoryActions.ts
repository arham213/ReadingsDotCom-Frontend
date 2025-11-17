import { getBooks } from "../services/categoryService";

export const getCategoryBooks = async (categoryCode: Number, setState: any) => {
    console.log('categoryCode in action:', categoryCode);
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));
        const response = await getBooks(categoryCode);
        console.log('dsjgh');
        if (response?.success) {
            window.alert("Books fetched successfully");
            setState((prev: any) => ({...prev, success: "Bokks fetched successfully"}));

        } else {
            throw new Error(response?.error?.message);
        }
    } catch(error: any) {
        console.error('Error fetching Books:', error);
        window.alert("Error fetching Books")
        setState((prev: any) => ({...prev, error: error.message || "Something went wrong"}));
    } finally {
        setState((prev: any) => ({...prev, loading: false}));
    }
}