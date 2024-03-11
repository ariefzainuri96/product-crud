"use client";

import { usePathname } from "next/navigation";
import React from "react";

const DetailProduct = () => {
    const path = usePathname();
    const id = path.split("/").pop();

    return <div>DetailProduct {id}</div>;
};

export default DetailProduct;
