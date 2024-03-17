"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { isRedirectError } from "next/dist/client/components/redirect";

const secretKey = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

export async function authenticate(prevState: any, formData: FormData) {
    const BASE_URL = process.env.BASE_URL;

    try {
        const email = formData.get("email");
        const password = formData.get("password");

        const body = JSON.stringify({
            email: email,
            password: password,
        });

        console.log(body);
        const response = await fetch(`${BASE_URL}/api/users/login`, {
            body: body,
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        if (response.status == 200) {
            const jsonData = await response.text();
            const data: LoginReponse = JSON.parse(jsonData);
            await setCookies(data.data, `${email}`);

            redirect("/");
        }
    } catch (error) {
        console.log(error);

        if (isRedirectError(error)) throw error;
    }
}

async function encrypt(payload: any, expires: Date) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(expires)
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}

async function setCookies(token: string, email: string) {
    const user = {
        email: email,
        token: token,
    };
    const expires = new Date(Date.now() + 15 * 60000);
    const session = await encrypt(user, expires);
    cookies().set("currentUser", session, { expires, httpOnly: true }); // httpOnly true -> we can only get cookies in server side
}
