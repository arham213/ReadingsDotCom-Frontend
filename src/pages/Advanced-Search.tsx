import { useEffect, useState } from "react";
import { AdvancedSearchFormState, Book } from "../types/Book";
import Button from "../components/common/Button";
import "../assets/styles/advanced-search.css"
import { useNavigate } from "react-router-dom";

const AdvancedSearch = () => {
    const navigate = useNavigate();
    const [state, setState] = useState<AdvancedSearchFormState>({
        keyword: '',
        title: '',
        author: '',
        ISBN: '',
        category: '',
        publisher: '',
        publicationYear: undefined,
        language: 'Any Language',
        format: 'Any Format',
        priceFrom: undefined,
        priceTo: undefined
    })

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;

        setState({
            ...state,
            [name]: [value]
        })
    }

    const handleSubmit = async () => {
        let queryParams = `?`;

        if (state.keyword) queryParams += `keyword=${state.keyword}&`
        if (state.title) queryParams += `title=${state.title}&`
        if (state.author) queryParams += `author=${state.author}&`
        if (state.ISBN) queryParams += `ISBN=${state.ISBN}&`
        if (state.category) queryParams += `category=${state.category}&`
        if (state.publisher) queryParams += `publisher=${state.publisher}&`
        if (state.publicationYear) queryParams += `publicationYear=${state.publicationYear}&`
        if (state.language && state.language !== 'Any Language') queryParams += `language=${state.language}&`
        if (state.format && state.format !== 'Any Format') queryParams += `format=${state.format}&`
        if (state.priceFrom) queryParams += `priceFrom=${state.priceFrom}&`
        if (state.priceTo) queryParams += `priceTo=${state.priceTo}`

        if (queryParams.endsWith('&') || queryParams.endsWith('?')) {
            queryParams = queryParams.slice(0, queryParams.length - 1);
        }

        navigate(`/search${queryParams}`)
    }

    useEffect(() => {
        console.log('state:', state)
    }, [state])

    return (
        <>
            <div className="advanced-search-page">
                <p className="form-heading">Advanced Search [Books Only]</p>
                <form action={handleSubmit} className="advanced-search-form">
                    <input type="text" name="keyword" value={state.keyword} placeholder="Keyword" onChange={handleInputChange} />
                    <input type="text" name="title" value={state.title} placeholder="Title" onChange={handleInputChange} />
                    <input type="text" name="author" value={state.author} placeholder="Author" onChange={handleInputChange} />
                    <input type="text" name="ISBN" value={state.ISBN} placeholder="ISBN" onChange={handleInputChange} />
                    <input type="text" name="category" value={state.category} placeholder="Category" onChange={handleInputChange} />
                    <input type="text" name="publisher" value={state.publisher} placeholder="Publisher" onChange={handleInputChange} />
                    <input type="number" name="publicationYear" value={state.publicationYear} placeholder="Publication Year" onChange={handleInputChange} />
                    <div className="select-inputs">
                        <select name="language" id="language" onChange={handleInputChange}>
                            <option value="">Any Language</option>
                            <option value="Urdu">Urdu</option>
                            <option value="Punjabi">Punjabi</option>
                            <option value="English">English</option>
                        </select>
                        <select name="format" id="format" onChange={handleInputChange}>
                            <option value="">Any Format</option>
                            <option value="Audio Book">Audio Book</option>
                            <option value="Board Book">Board Book</option>
                            <option value="Flexi Bind">Flexi Bind</option>
                            <option value="Hard Cover">Hard Cover</option>
                            <option value="Paperback">Paperback</option>
                        </select>
                    </div>
                    <input type="number" name="priceFrom" value={state.priceFrom} placeholder="Min Price" onChange={handleInputChange} />
                    <input type="number" name="priceTo" value={state.priceTo} placeholder="Max Price" onChange={handleInputChange} />
                    <Button text="Submit" type="submit" />
                </form>
            </div>
        </>
    )
}

export default AdvancedSearch;