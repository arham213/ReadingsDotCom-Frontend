import { useEffect, useState } from "react";
import { Book } from "../../types/Book";
import { TOP_CATEGORIES } from "../navbar/navbarData"
import { getBooksByAuthor, getBooksByCategory } from "../../actions/bookActions";
import Card from "../products/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import RightArrow from "../../assets/images/right-arrow.png";
import "../../assets/styles/products.css"
import { ProductCardSkeleton } from "./Skeleton";

interface CategoryState {
    books: Book[],
    loading: boolean,
    error: string,
    success: string
}

interface ProductsProps {
    heading?: string,
    categoryName?: string;
    categoryCode?: number;
    authorId?: string;
}

const Products = ({ heading, categoryName, categoryCode, authorId }: ProductsProps) => {
    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);
    
    // Use the explicit categoryCode if provided, otherwise look up by name in TOP_CATEGORIES
    const resolvedCategoryCode = categoryCode || TOP_CATEGORIES.find(category => category.name === categoryName)?.code;
    const viewAllUrl = resolvedCategoryCode ? `/category/${resolvedCategoryCode}` : `/author/${authorId}`;

    const [state, setState] = useState<CategoryState>({
        books: [],
        loading: false,
        error: "",
        success: ""
    })
    useEffect(() => {
        if (resolvedCategoryCode) {
            getBooksByCategory(resolvedCategoryCode, setState);
        } else if (authorId) {
            getBooksByAuthor(authorId, setState);
        }
    }, [])

    return (
        <section className="products-section">
            <span className="section-header">
                <span className="heading">{ heading || categoryName }</span>
                <img src={RightArrow} alt="Arrow" />
                <a href={viewAllUrl} className="view-all-text">View All</a>
            </span>
            {state.loading && state.books.length === 0 && (
                <div className="skeleton-products-row">
                    {[1, 2, 3, 4].map((i) => (
                        <ProductCardSkeleton key={i} />
                    ))}
                </div>
            )}
            {state.books.length > 0 && (<div className="products-list">
                <div ref={prevRef} className="slider-arrow slider-arrow-prev">‹</div>
                <div ref={nextRef} className="slider-arrow slider-arrow-next">›</div>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={12}
                    slidesPerView={2}
                    loop={true}
                    breakpoints={{
                        480: { slidesPerView: 2, spaceBetween: 14 },
                        768: { slidesPerView: 3, spaceBetween: 16 },
                        1024: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                    onInit={(swiper: any) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    {state.books?.map((book: Book) => (
                        <SwiperSlide className="product-slide" key={book._id}>
                            <Card product={book} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>)}
        </section>
    )
}

export default Products;