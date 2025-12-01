import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getBooksByCategory } from "../actions/bookActions";
import { Book } from "../types/Book";
import Card from "../components/products/card";
import "../assets/styles/category.css";

interface CategoryPageState {
    books: Book[],
    loading: boolean,
    error: string,
    success: string
}

const Category = () => {
    const path = useLocation().pathname.split("/")[2];
    console.log('path:', path);

    const [state, setState] = useState<CategoryPageState>({
        books: [],
        loading: false,
        error: "",
        success: ""
    })

    useEffect(() => {
        getBooksByCategory(Number(path), setState);
    }, [])

    useEffect(() => {
        console.log('state changed:', state);
    }, [state])

    return (
        <div>
            {state.loading && <p>Loading...</p>}
            {/* <h2 className="page-heading">{}</h2> */}
            <div className="products-listing-container">
                {state.books?.map((book: Book) => <Card product={book} />)}
            </div>
        </div>
    )
}

export default Category;