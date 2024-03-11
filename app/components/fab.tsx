import { CustomImage } from "@/components/custom_image";
import Link from "next/link";

const Fab = () => {
    return (
        <Link href="?showaddproduct=true">
            <div className="absolute bottom-[10px] right-[10px] flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-blue-300 hover:bg-blue-400">
                <CustomImage
                    path="/ic_plus.svg"
                    stroke="white"
                    width={30}
                    height={30}
                />
            </div>
        </Link>
    );
};

export default Fab;
