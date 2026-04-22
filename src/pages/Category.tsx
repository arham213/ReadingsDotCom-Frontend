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
    }, [path])

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
                <>
                    <div className="products-listing-container">
                        {state.books?.map((book: Book, index: number) => <Card key={index} product={book} />)}
                    </div>
                    {!state.loading && (!state.books || state.books.length === 0) && (
                        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--color-text-muted)' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--color-primary)' }}>No books found</h3>
                            <p style={{ fontSize: '0.9rem' }}>We couldn't find any books in this category right now. Check back later!</p>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default Category;