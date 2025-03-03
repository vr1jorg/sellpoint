type Callback = () => void;

export interface EditProductProps {
    product: Product
}

export interface AddToCartProps {
    product: Product
    cart: Product[]
    setCart: React.Dispatch<React.SetStateAction<Product[]>>
}

export type Product = {
    id: number
    name: string
    category: string
    quantity: number
    price: number
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    deletedAt: null | Date
}

export enum ButtonType {
    Button = "button",
    Submit = "submit",
    Reset = "reset"
}

export enum ButtonVariant {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary",
    Danger = "danger",
    Success = "success",
}


export interface ButtonProps {
    variant: ButtonVariant,
    type?: ButtonType,
    onClick?: Callback,
    children: React.ReactNode
}

export interface DeleteProductProps {
    id: number
}

export interface ProductsTableProps {
    products: Product[]
}

export interface ProductGridProps {
    products: Product[]
}

export interface OrdersTableProps {
    orders: Order[]
}

export interface Order {
    id: number;
    products: Product[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}