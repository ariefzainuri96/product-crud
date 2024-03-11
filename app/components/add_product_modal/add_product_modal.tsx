import Image from "next/image";
import { AddProductForm } from "./form";
import { ProductModel } from "@/model/type/product_model";

const AddProductModal = ({ data }: { data?: ProductModel }) => {
    return (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur">
            <div className="mx-[10vw] flex w-full max-w-[600px] flex-col rounded-lg bg-white p-6">
                <Image
                    src="/icons/ic_featured.svg"
                    alt="add_product"
                    width={60}
                    height={60}
                />
                <p className="mt-[20px] text-[18px] font-bold">
                    {data ? "Update Product" : "Add Product"}
                </p>
                <AddProductForm data={data} />
            </div>
        </div>
    );
};

export default AddProductModal;
