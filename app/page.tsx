import { PRODUCT_LIST } from "@/constant.index";
import Fab from "./components/fab";
import AddProductModal from "@/app/components/add_product_modal/add_product_modal";
import ProductItem from "@/app/components/product_item";
import DeleteDataModal from "@/components/delete_data_modal";

type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: SearchParamProps) {
    const show = searchParams?.showaddproduct;
    const showDelete = searchParams?.showdelete;
    const index = searchParams?.index;

    return (
        <main className="flex min-h-screen flex-col items-center p-2">
            <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3">
                {PRODUCT_LIST.map((element, index) => (
                    <ProductItem key={index} data={element} index={index} />
                ))}
            </div>
            <Fab />
            {show && (
                <AddProductModal
                    data={
                        index === undefined
                            ? undefined
                            : PRODUCT_LIST[Number(index)]
                    }
                />
            )}
            {showDelete && <DeleteDataModal pathname={"/"} />}
        </main>
    );
}
