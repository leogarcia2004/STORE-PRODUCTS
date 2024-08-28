

export interface IProduct {
    id: number;
    title: string;
    category: ICategory;
    price: number;
    description: Idescription;
    images: string[];
}
  
interface Idescription {
    short: string;
    long: string;
}

interface ICategory{
    id: number;
    name: string;
    image: string;
}

export interface productsProps {
    products: IProduct[]
}