"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route"; // Adjust path if needed
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export async function getUserId() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        throw new Error("User not authenticated");
    }

    const db = await dbConnect();
    const user = await db
        .collection(collectionNameObj.userCollections)
        .findOne({ email: session.user.email });

    if (!user) {
        throw new Error("User not found");
    }

    return user._id.toString(); // always return as string to avoid issues
}


