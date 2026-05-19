import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export default async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const isLoggedIn = !!session;
    const protectedRoutes = ["/add-idea", "/ideas/", "/my-ideas", "/my-interactions", "/profile/update"];


    const isProtectedRoute = protectedRoutes.some((route) =>
        request.nextUrl.pathname.startsWith(route)
    );
    // console.log({ isLoggedIn, isProtectedRoute , currentPath: request.nextUrl.pathname});

    if (!isLoggedIn && isProtectedRoute) {
        const loginUrl = new URL("/login", request.url);

        loginUrl.searchParams.set(
            "callbackUrl",
            request.nextUrl.pathname + request.nextUrl.search
        );

        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/ideas/:path", "/add-idea", "/my-ideas", "/my-interactions", "/profile"],
};