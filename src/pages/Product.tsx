import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getBook } from "../actions/bookActions";
import { addToCart } from "../actions/cartActions";
import { Book } from "../types/Book";
import { Category } from "../types/Category";
import { Author } from "../types/Author";
import Button from "../components/common/Button";
import ShareIcon from "../assets/images/share-icon.png";
import HeartIcon from "../assets/images/heart-icon.png";
import "../assets/styles/product.css";
import Products from "../components/common/products";
import { ProductDetailSkeleton } from "../components/common/Skeleton";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import toast from "../utils/toast";

interface ProductPageState {
    book: Book | null,
    loading: boolean,
    error: string,
    success: string,
    cartItemCount?: Number | null
}

const Product = () => {
    const bookId = useLocation().pathname.split('/')[2];
    const navigate = useNavigate();
    const { user } = useAuth();
    const { incrementCartItemCountContext } = useCart();
    
    console.log('bookId:', bookId);

    const [state, setState] = useState<ProductPageState>({
        book: null,
        loading: false,
        error: "",
        success: ""
    });

    useEffect(() => {
        getBook(bookId, setState);
    }, [])

    useEffect(() => {
        console.log('state changed:', state);
    }, [state])

    const book = state.book;

    const handleAddToCart = async () => {
        if (!user) {
            toast.show("Please login first to add book to the cart");
            return;
        }

        if (!book) return;

        let price = book.discount > 0 ? book.ourPriceAfterDiscount : book.ourPrice;

        await addToCart(user?.cart?.cartId, book._id, 1, price, incrementCartItemCountContext, setState);
    }

    const handleBuyNow = async () => {
        if (!user) {
            toast.show("Please login first to add book to the cart");
            return;
        }
        await handleAddToCart();
        navigate('/cart');
    }

    return (
        <>
            {state.loading && !book && <ProductDetailSkeleton />}
            {book && (
                <>
                    <section className="product-view-section product-page-section">
                        <img src={book.imageUrl} alt={book.title} className="product-img" />
                        <div className="content">
                            <div className="product-details">
                                <h1 className="product-title">{book.title}</h1>
                                <span className="format-and-prublication-year">[{book.format} - {book.publicationYear}]</span>
                                {book.authors && (
                                    <div className="author-names">
                                        {book.authors.map((author: Author, index) => {
                                            if (index === book.authors.length - 1)
                                                return <span className="author-name">{author.name}</span>
                                            return <span className="author-name">{author.name}, </span>
                                        })}
                                    </div>
                                )}
                                <span className="book-status">{book.status}</span>
                                <span className="list-price">List Price: {book.listPriceCurrency}{book.listPrice}</span>
                                {book.discount > 0 ? (
                                    <>
                                        <div className="our-price">
                                            Our Price: 
                                            <span className="our-price-value">{book.ourPrice}</span>
                                            <span className="our-price-after-discount">Rs.{Math.round(book.ourPriceAfterDiscount)}</span>
                                        </div>
                                        <span className="standard-discount">Standard Discount: {book.discount}%</span>
                                        <span className="you-save">You Save: Rs.{Math.round(book.youSave)}</span>
                                    </>
                                ) : (
                                    <span className="our-price">Our Price: Rs.{book.ourPrice}</span>
                                )}
                                {book.categories && (
                                    <div className="categories">
                                        Categories:&nbsp;
                                        {book.categories.map((category: Category, index: number) => {
                                            if (index === book.categories.length - 1)
                                                return <span className="category-name">{category.name}</span>
                                            return <span className="category-name">{category.name}, </span>
                                        })}
                                    </div>   
                                )}

                                {book.subCategories && (
                                    <div className="sub-categories">
                                        Sub_Categories:&nbsp;
                                        {book.subCategories.map((subCategory: Category, index: number) => {
                                            if (index === book.subCategories.length - 1)
                                                return <span className="sub-category-name">{subCategory.name}</span>
                                            return <span className="sub-category-name">{subCategory.name}, </span>
                                        })}
                                    </div>   
                                )}

                                {book.additionalCategories && (
                                    <div className="additional-categories">
                                        Additional_Categories:&nbsp;
                                        {book.additionalCategories.map((additionalCategory: Category, index: number) => {
                                            if (index === book.additionalCategories.length - 1)
                                                return <span className="additional-category-name">{additionalCategory.name}</span>
                                            return <span className="additional-category-name">{additionalCategory.name}, </span>
                                        })}
                                    </div>   
                                )}

                                <div className="publisher-isbn-pages-count">
                                    <span className="publisher-name">Publisher: {book.publisher.name} | </span>
                                    <span className="isbn-number">ISBN: {book.ISBN} | </span>
                                    <span className="pages-count">Pages: {book.pagesCount}</span>
                                </div>

                                <div className="shipping-weight-and-dimensions">
                                    <span className="shipping-weight">Shipping Weight: {book.shippingWeight} | </span>
                                    <span className="dimensions">Dimensions: {book.dimensions}</span>
                                </div>
                            </div>
                            <div className="action-buttons">
                                {book.status === "In Stock" && (
                                    <>
                                        <Button classNames="buy-now-button" text="Buy Now" onClick={handleBuyNow} />
                                        <Button classNames="add-to-cart-button" text="Add To Cart" onClick={handleAddToCart} />
                                    </>
                                )}
                                <div className="add-to-wishlist">
                                    <img src={HeartIcon} alt="Heart Icon" className="heart-icon" />
                                    <span className="text">Add To Wishlist</span>
                                </div>
                                
                                <div className="share">
                                    <img src={ShareIcon} alt="Share Icon" className="share-icon" />
                                    <span className="text">Share</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="description-section product-page-section">
                        <p className="section-heading">Description</p>
                        <p className="description-text">{book.description}</p>
                    </section>
                    {book.authors && (
                        <>
                        <section className="about-author-section product-page-section">
                            <p className="section-heading">About the Author(s)</p>
                            <ul className="authors-info">
                                {book.authors.map((author: Author) => (
                                    <li className="about-author">{author.aboutInfo}</li>
                                ))}
                            </ul>
                        </section>
                        <section className="also-by-same-authors">
                            {book.authors.map((author: Author) => (
                                <Products authorId={author._id} heading={`Also By ${author.name}`}/>
                            ))}
                        </section>
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default Product;