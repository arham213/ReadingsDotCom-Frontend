import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getBooksByCategory } from "../actions/bookActions";
import { Book } from "../types/Book";
import Card from "../components/products/card";
import { ProductCardSkeleton } from "../components/common/Skeleton";
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
            {/* <h2 className="page-heading">{}</h2> */}
            {state.loading ? (
                <div className="products-listing-container">
                    {[...Array(8)].map((_, i) => (
                        <ProductCardSkeleton key={i} />
                    ))}
                </div>
            ) : (
                <div className="products-listing-container">
                    {state.books?.map((book: Book, index: number) => <Card key={index} product={book} />)}
                </div>
            )}
        </div>
    )
}

export default Category;