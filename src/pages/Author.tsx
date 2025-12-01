import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getBooksByAuthor } from "../actions/bookActions";
import { Book } from "../types/Book";
import Card from "../components/products/card";
import "../assets/styles/category.css";

interface AuthorPageState {
    books: Book[],
    loading: boolean,
    error: string,
    success: string
}

const Author = () => {
    const authorId = useLocation().pathname.split("/")[2];
    console.log('path:', authorId);

    const [state, setState] = useState<AuthorPageState>({
        books: [],
        loading: false,
        error: "",
        success: ""
    })

    useEffect(() => {
        getBooksByAuthor(authorId, setState);
    }, [])

    useEffect(() => {
        console.log('state changed:', state);
    }, [state])

    return (
        <div>
            {state.loading && <p>Loading...</p>}

            <div className="products-listing-container">
                {state.books?.map((book: Book) => <Card product={book} />)}
            </div>
        </div>
    )
}

export default Author;