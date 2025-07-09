import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export const middleware = async (req) => {
    const token = await getToken({ req, secret });


    const isTokenOK = Boolean(token);
    const isAdminUser = token?.role === "admin";
    const pathname = req.nextUrl.pathname;

    const isAdminSpecificRoute = pathname.startsWith("/adminDashboard/TotalUser");

    // Restrict access to specific route for non-admin users
    if (isAdminSpecificRoute && !isAdminUser) {
        const loginUrl = new URL("/logIn", req.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next(); 
};

export const config = {
    matcher: ["/adminDashboard/:path*", "/UserProfile/:path*"],
};
