// app/api/posts/route.js

import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();

        const db = await dbConnect(collectionNameObj.postNotifications);
        const result = await db.insertOne(body);

        return NextResponse.json({ result, success: true, data: result }, { status: 201 });
    } catch (error) {
        console.error('Error creating post:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}




export const GET = async () => {

    const db = dbConnect(collectionNameObj.postNotifications)
    const res = await db.find({}).toArray()

    return NextResponse.json(res)


}
