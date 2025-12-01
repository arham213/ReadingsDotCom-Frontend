import { Author } from "./Author"
import { Category } from "./Category"
import { Publisher } from "./Publisher"

export type Book = {
    _id: string,
    title: string,
    imageUrl: string,
    description: string,
    ISBN: string,
    pagesCount: number,
    shippingWeight: number,
    dimensions: string,
    listPrice: number,
    listPriceCurrency: string,
    ourPrice: number,
    discount: number,
    ourPriceAfterDiscount: number,
    youSave: number,
    format: "Audio Book" | "Board Book" | "Flexi bind" | "Hard Cover" | "Paperback",
    publicationYear: number,
    publisher: Publisher,
    authors: Author[],
    categories: Category[],
    subCategories: Category[],
    additionalCategories: Category[],
    status: "In Stock" | "Pre-Order" | "Out of Stock",
    statusMessage: string,
    inStock: number,
    createdAt: Date,
    updatedAt: Date
}

export type AdvancedSearchFormState = {
    keyword: string,
    title: string,
    author: string,
    ISBN: string,
    category: string,
    publisher: string,
    publicationYear: number | undefined,
    language: 'Any Language' | 'Urdu' | 'Punjabi' | 'English',
    format: 'Any Format' | 'Audio Book' | 'Board Book' | 'Flexi Bind' | 'Hard Cover' | 'Paperback'
    priceFrom: number | undefined,
    priceTo: number | undefined
}