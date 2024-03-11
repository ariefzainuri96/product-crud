"use client";

import { ProductModel } from "@/model/type/product_model";
import Link from "next/link";
import React from "react";
import { CustomImage } from "../../components/custom_image";
import { useRouter } from "next/navigation";

const ProductItem = ({
    data,
    index,
}: {
    data: ProductModel;
    index: number;
}) => {
    const router = useRouter();

    return (
        <Link href={`/${data.id}`}>
            <div className="flex flex-row rounded-lg bg-slate-50 p-2 hover:bg-slate-100">
                <div className="flex min-w-0 flex-1 flex-col">
                    <p className="line-clamp-1 break-words text-lg font-bold">
                        {data.name}
                    </p>
                    <p className="text-slate-500">$ {data.price}</p>
                    <p className="text-slate-400">{data.qty}</p>
                </div>
                <div className="mt-1 flex flex-col gap-2">
                    <div
                        onClick={(e) => {
                            e.preventDefault();

                            router.push("?showdelete=true");
                        }}
                    >
                        <CustomImage
                            path="/ic_trash.svg"
                            stroke="#E30008"
                            width={18}
                            height={18}
                        />
                    </div>
                    <div
                        onClick={(e) => {
                            e.preventDefault();

                            router.push(`?showaddproduct=true&index=${index}`);
                        }}
                    >
                        <CustomImage
                            path="/ic_edit.svg"
                            stroke="gray"
                            width={18}
                            height={18}
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductItem;
