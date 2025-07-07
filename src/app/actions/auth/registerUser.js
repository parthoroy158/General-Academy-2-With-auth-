"use server";
import bcrypt from 'bcrypt'
import dbConnect, { collectionNameObj } from '@/lib/dbConnect';

const registerUser = async (payload) => {
    try {
        console.log('This is the payload data:', payload);

        const userCollections =  dbConnect(collectionNameObj.userCollections);

        // Destructure and validate inputs
        const { email, password, name } = payload;

        if (!email || !password) {
            return { success: false, message: 'Email and password are required.' };
        }

        // Find the user for his existence
        const existingUser = await userCollections.findOne({ email });

        console.log("This is the user:", existingUser);

        if (existingUser) {
            return { success: false, message: 'User already exists.' };
        }
        if (!existingUser) {
            const hashPassword = await bcrypt.hash(password, 10)
            payload.password = hashPassword
            const result = await userCollections.insertOne(payload);
            return { success: true, userId: result.insertedId };
        }

    } catch (error) {
        console.error('Registration error:', error);
        return { success: false, message: 'Internal server error.' };
    }
};

export default registerUser;
