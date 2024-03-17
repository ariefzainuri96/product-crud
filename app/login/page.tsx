"use client";

import { authenticate } from "@/auth_lib";
import { useFormState, useFormStatus } from "react-dom";

const Login = () => {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return (
        <main className="mx-auto flex h-screen w-screen max-w-[1440px] flex-col items-center justify-center">
            <form className="max-w-[600px]" action={dispatch}>
                <input
                    required
                    className="product-input w-full"
                    type="email"
                    name="email"
                    placeholder="Input email"
                />
                <input
                    required
                    className="product-input mt-2 w-full"
                    type="password"
                    name="password"
                    placeholder="Input password"
                />
                <SubmitButton />
            </form>
        </main>
    );
};

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            aria-disabled={pending}
            className={
                "btn-filled-primary mt-2 w-full " +
                (pending ? "bg-slate-400 hover:bg-slate-400" : "")
            }
        >
            Login
        </button>
    );
};

export default Login;
