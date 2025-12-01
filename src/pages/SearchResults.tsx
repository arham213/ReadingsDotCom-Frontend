import { useEffect, useState } from "react";
import { advancedSearchBooks } from "../actions/bookActions";
import { Book } from "../types/Book";
import Card from "../components/products/card";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
    const location = useLocation().search;
    console.log('location:', location);
    const [dummyState, setDummyState] = useState({
        books: [],
        loading: false,
        success: '',
        error: ''
    })

    const search = async () => {
        await advancedSearchBooks(location, setDummyState)
    }

    useEffect(() => {
        !!location && search()
    }, [])

    return (
        <>
            {dummyState.books.length > 0 ? (
                <>
                    <p className="form-heading">Search Results ({dummyState.books.length})</p>
                    <div className="search-results">
                        {dummyState.books.map((book: Book) => <Card key={book._id} product={book} />)}
                    </div>
                </>
            ) : <p>No results found!</p>}
        </>
    )
}

export default SearchResults;