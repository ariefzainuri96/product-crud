export interface ProductResponse {
    status?: number;
    message?: string;
    data?: Product[];
}

export interface Product {
    _id: string;
    user_id: string;
    name: string;
    quantity: number;
    price: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
