"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
    Product,
    ProductResponse,
} from "@/model/response/dashboard/product_response";
import { handleUpdateOrAdd } from "@/app/services";
import { CancelForm } from "./cancel_form";

const AddProductModal = ({ data }: { data?: ProductResponse }) => {
    const searchParam = useSearchParams();
    const show = searchParam.get("showaddproduct");
    const index = searchParam.get("index");
    const product: Product | undefined =
        index === null ? undefined : (data?.data ?? [])[Number(index)];

    return (
        show && (
            <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur">
                <div className="mx-[10vw] flex w-full max-w-[600px] flex-col rounded-lg bg-white p-6">
                    <Image
                        src="/icons/ic_featured.svg"
                        alt="add_product"
                        width={60}
                        height={60}
                    />
                    <p className="mt-[20px] text-[18px] font-bold">
                        {index !== null ? "Update Product" : "Add Product"}
                    </p>
                    <form
                        action={(data) => {
                            handleUpdateOrAdd(index !== null, data);
                        }}
                    >
                        <input
                            type="text"
                            defaultValue={product?.name}
                            name="name"
                            placeholder="Input Product Name"
                            className="product-input mt-2"
                        />
                        <input
                            type="text"
                            name="price"
                            defaultValue={product?.price}
                            placeholder="Input Product Price"
                            className="product-input mt-2"
                        />
                        <input
                            type="number"
                            name="qty"
                            defaultValue={product?.quantity}
                            placeholder="Input Product Quantity"
                            className="product-input mt-2"
                        />
                        <div className="mt-4 flex w-full flex-row gap-[12px]">
                            <CancelForm />
                            <button
                                type="submit"
                                className="btn-filled-primary flex-1"
                            >
                                {product ? "Update" : "Add"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
};

export default AddProductModal;
