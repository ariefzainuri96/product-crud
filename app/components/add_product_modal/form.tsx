import { ProductModel } from "@/model/type/product_model";
import Link from "next/link";

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const AddProductForm = async ({ data }: { data?: ProductModel }) => {
    async function handleProduct(data: FormData) {
        "use server";

        await delay(1000);

        console.log(
            `handleProduct => ${data.get("name")} => ${data.get("price")} => ${data.get("qty")}`,
        );
    }

    return (
        <form action={handleProduct}>
            <input
                type="text"
                value={data?.name}
                name="name"
                placeholder="Input Product Name"
                className="product-input mt-2"
            />
            <input
                type="text"
                name="price"
                value={data?.price}
                placeholder="Input Product Price"
                className="product-input mt-2"
            />
            <input
                type="number"
                name="qty"
                value={data?.qty}
                placeholder="Input Product Quantity"
                className="product-input mt-2"
            />
            <div className="mt-4 flex w-full flex-row gap-[12px]">
                <Link className="flex-1" href="/">
                    <button type="reset" className="btn-outlined w-full">
                        Cancel
                    </button>
                </Link>
                <button type="submit" className="btn-filled-primary flex-1">
                    {data ? "Update" : "Add"}
                </button>
            </div>
        </form>
    );
};
