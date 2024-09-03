

export interface IProduct {
    id: number;
    title: string;
    category: ICategory;
    price: number;
    description: string;
    image: string;
}

export interface IProductUpdate {
    id: number;
    title: string;
    category: ICategory;
    price: number;
    description: string;
    images: string[];
}

interface ICategory{
    id: number;
    name: string;
    image: string;
}

export interface productsProps {
    products: IProduct[]
}