import { get } from "http";
import { use, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCategoryBooks } from "../actions/categoryActions";

const Category = () => {
    const path = useLocation().pathname.split("/")[2];
    console.log('path:', path);

    const [state, setState] = useState({
        books: [],
        loading: false,
        error: "",
        success: ""
    })

    useEffect(() => {
        getCategoryBooks(Number(path), setState);
    }, [])

    useEffect(() => {
        console.log('state changed:', state);
    }, [state])

    return (
        <></>
    )
}

export default Category;