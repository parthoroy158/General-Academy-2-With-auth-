"use server";

import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import bcrypt from 'bcrypt';

const loginUser = async (payload) => {
    const { email, password } = payload ?? {};

    // 1. Input validation
    if (!email || !password) {
        return { success: false, message: 'Email and password are required.' };
    }

    // 2. Database connection & user lookup
    const userCollections = await dbConnect(collectionNameObj.userCollections);
    const user = await userCollections.findOne({ email });

    if (!user) {
        return null;
    }

    // 3. Password verification
    const isPasswordOk = bcrypt.compareSync( password, user.password );
    if (!isPasswordOk) {
        return null
    }

    // 4. Sanitize user object before returning
    const { password: _removed, ...userWithoutPassword } = user;

    return user
};

export default loginUser;

