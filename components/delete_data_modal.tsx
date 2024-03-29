"use client";

import { deleteProduct } from "@/app/services";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

const DeleteDataModal = () => {
    const searchParams = useSearchParams();
    const showDelete = searchParams.get("showdelete");
    const id = searchParams.get("id");

    const [message, dispatch] = useFormState(deleteProduct, undefined);

    const router = useRouter();

    return (
        showDelete && (
            <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur">
                <div className="mx-[10vw] flex w-full max-w-[400px] flex-col rounded-lg bg-white p-6">
                    <Image
                        src="/icons/ic_featured.svg"
                        alt="add_product"
                        width={60}
                        height={60}
                    />
                    <p className="mt-[20px] text-[18px] font-bold">
                        Delete Data
                    </p>
                    <p className="mt-2 break-words text-[14px] text-[#475467]">
                        Are you sure you want to delete this data? This action
                        cannot be undone.
                    </p>
                    <form action={dispatch}>
                        <input
                            hidden={true}
                            defaultValue={id ?? ""}
                            name="product_id"
                        />
                        <div className="mt-8 flex flex-row gap-3">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();

                                    router.back();
                                }}
                                type="button"
                                className="btn-outlined flex-1"
                            >
                                Cancel
                            </button>
                            <DeleteForm />
                        </div>
                    </form>
                </div>
            </div>
        )
    );
};

function DeleteForm() {
    const {pending} = useFormStatus();

    return (
        <button aria-disabled={pending} type="submit" className={"btn-filled-primary flex-1 " + (pending && 'hover:bg-slate-400 bg-slate-400')}>
            Delete
        </button>
    );
}

export default DeleteDataModal;
