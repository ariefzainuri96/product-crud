import Fab from "./(components)/fab";
import DeleteDataModal from "@/components/delete_data_modal";
import { Suspense } from "react";
import { ProductContainer } from "./(components)/product_container";

type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
};

export default async function Home({ searchParams }: SearchParamProps) {
    return (
        <main className="flex min-h-screen flex-col items-center p-2">
            <Suspense fallback={"Loading..."}>
                <ProductContainer />
            </Suspense>
            <Fab />
            <Suspense fallback={"Loading..."}>
                <DeleteDataModal />
            </Suspense>
        </main>
    );
}
