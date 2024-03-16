import AddProductModal from "./add_product_modal/add_product_modal";
import ProductItem from "./product_item";
import { getProducts } from "../services";

export const ProductContainer = async () => {
    const data = await getProducts();

    return (
        <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3">
            {data?.data?.map((element, index) => (
                <ProductItem key={index} data={element} index={index} />
            ))}
            <AddProductModal data={data} />
        </div>
    );
};
