import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { NextResponse } from 'next/server';
import React from 'react';

export const GET = async () => {

    try {
        const collection = dbConnect(collectionNameObj.userCollections)
        const result = await collection.find({}).toArray()
        return NextResponse.json(result)
    }
    catch (error) {
        console.log("This is the error:", error)
        return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 })
    }
};
