"use client";

import { CustomImage } from "@/components/custom_image";

const Fab = () => {
    return (
        <div
            onClick={(e) => {
                e.preventDefault();

                const newUrl = `?showaddproduct=true`;

                window.history.pushState(null, "", newUrl);
            }}
            className="absolute bottom-[10px] right-[10px] flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-blue-300 hover:bg-blue-400"
        >
            <CustomImage
                path="/ic_plus.svg"
                stroke="white"
                width={30}
                height={30}
            />
        </div>
    );
};

export default Fab;
