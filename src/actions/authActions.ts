import { loginUser } from "../services/authService";

export const handleLogin = async (email: string, password: string, setState: any) => {
    try {
        setState((prev: any) => ({ ...prev, loading: true, error: "" }));
        console.log('dhsgdjafghfhwaegw');
        const response = await loginUser(email, password);
        console.log('dsjgh');
        if (response?.success) {
            window.alert("Login successful");
            setState((prev: any) => ({...prev, success: "Login successful"}));

        } else {
            throw new Error(response?.error?.message);
        }
    } catch(error: any) {
        console.error('Error logging in:', error);
        window.alert("Error logging in")
        setState((prev: any) => ({...prev, error: error.message || "Something went wrong"}));
    } finally {
        setState((prev: any) => ({...prev, loading: false}));
    }
}