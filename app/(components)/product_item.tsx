"use client";

import Link from "next/link";
import { CustomImage } from "../../components/custom_image";
import { usePathname, useRouter } from "next/navigation";
import { Product } from "@/model/response/dashboard/product_response";

const ProductItem = ({ data, index }: { data: Product; index: number }) => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <Link href={`/${data._id}`}>
            <div className="flex flex-row rounded-lg bg-slate-50 p-2 hover:bg-slate-100">
                <div className="flex min-w-0 flex-1 flex-col">
                    <p className="line-clamp-1 break-words text-lg font-bold">
                        {data.name}
                    </p>
                    <p className="text-slate-500">Rp {data.price}</p>
                    <p className="text-slate-400">{data.quantity}</p>
                </div>
                <div className="mt-1 flex flex-col gap-2">
                    <div
                        onClick={(e) => {
                            e.preventDefault();

                            const newUrl = `?showdelete=true&id=${data._id}`;

                            window.history.pushState(null, "", newUrl);
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

                            const newUrl = `?showaddproduct=true&index=${index}`;

                            window.history.pushState(null, "", newUrl);
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
