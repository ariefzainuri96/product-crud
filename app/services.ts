"use server";

import { decrypt } from "@/auth_lib";
import { ProductResponse } from "@/model/response/dashboard/product_response";
import { revalidatePath } from "next/cache";
import { isRedirectError } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";

const BASE_URL = process.env.BASE_URL;

export async function getProducts(): Promise<ProductResponse | undefined> {
    const currentUser = cookies().get("currentUser")?.value;

    if (!currentUser) return { status: 401 };

    try {
        const dataCookies = await decrypt(currentUser);

        const response = await fetch(`${BASE_URL}/api/products`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${dataCookies.token}`,
            },
            method: "GET",
        });

        const data: ProductResponse = await response.json();

        data.data?.forEach((element) => {
            console.log(element.name);
        });

        return data;
    } catch (error) {
        console.log(error);
        return { message: `${error}` };
    }
}

export async function handleUpdateOrAdd(
    prevState: any, 
    formData: FormData,
) {
    const currentUser = cookies().get("currentUser")?.value;

    if (!currentUser) return { status: 401 };

    try {
        const dataCookies = await decrypt(currentUser);
        const id = formData.get('product_id')

        await fetch(`${BASE_URL}/api/products${id && `/${id}`}`, {
            body: JSON.stringify({
                "name": formData.get('name'),
                "price": formData.get('price'),
                "quantity": formData.get('quantity')
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${dataCookies.token}`,
            },
            method: id ? "PUT" : "POST",
        });        
        
        revalidatePath('/')
        redirect('/', RedirectType.replace)
    } catch (error) {
        console.log(error);
        if (isRedirectError(error)) throw error
        return { message: `${error}` };
    }
}

export async function deleteProduct(
    prevState: any, 
    formData: FormData,
) {
    const currentUser = cookies().get("currentUser")?.value;

    if (!currentUser) return { status: 401 };

    try {
        const dataCookies = await decrypt(currentUser);
        const id = formData.get('product_id')

        await fetch(`${BASE_URL}/api/products${id && `/${id}`}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${dataCookies.token}`,
            },
            method: "DELETE",
        });        
        
        revalidatePath('/')
        redirect('/', RedirectType.replace)
    } catch (error) {
        console.log(error);
        if (isRedirectError(error)) throw error
        return { message: `${error}` };
    }
}