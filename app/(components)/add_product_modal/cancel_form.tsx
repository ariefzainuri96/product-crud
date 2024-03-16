"use client";

import { useRouter } from "next/navigation";

export const CancelForm = () => {
    const router = useRouter();

    return (
        <button
            onClick={(e) => {
                e.preventDefault();

                router.back();
            }}
            type="submit"
            className="btn-outlined w-full flex-1"
        >
            Cancel
        </button>
    );
};
