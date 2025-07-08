import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const PATCH = async (req, { params }) => {
    const id = params.id;
    console.log("This is the server id:", id)

    try {
        console.log("This is the params id:", id);

        const db = dbConnect(collectionNameObj.userCollections);

        const query = { _id: new ObjectId(id) };

        const body = await req.json();

        const update = {
            $set: { ...body },
        };

        const result = await db.updateOne(query, update);
        revalidatePath('/adminDashboard/TotalUser');
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error updating user:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Internal server error.',
                error: error.message,
            },
            { status: 500 }
        );
    }
};
