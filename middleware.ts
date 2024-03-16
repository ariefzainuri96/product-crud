import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
    const currentUser = cookies().get("currentUser")?.value;

    // if (currentUser && !request.nextUrl.pathname.startsWith("/")) {
    //     return Response.redirect(new URL("/", request.url));
    // }

    if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
        console.log("redirect to login");
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
