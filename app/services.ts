"use server";

import { decrypt } from "@/lib";
import { ProductResponse } from "@/model/response/dashboard/product_response";
import { cookies } from "next/headers";

const BASE_URL = process.env.BASE_URL;

export async function getProducts(): Promise<ProductResponse | undefined> {
    const currentUser = cookies().get("currentUser")?.value;

    if (!currentUser) return { message: "Failed to fetch cookie" };

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

export async function handleUpdateOrAdd(isUpdate: boolean, formData: FormData) {
    console.log(
        `handleProduct => ${formData.get("name")} => ${formData.get("price")} => ${formData.get("qty")}`,
    );
}
