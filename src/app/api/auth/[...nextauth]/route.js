import loginUser from "@/app/actions/auth/loginUser";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";





export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials)
                // Add logic here to look up the user from the credentials supplied
                const user = await loginUser(credentials)
                if (user) {
                    console.log("This is the user log in attempt:", user)
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],
    pages: {
        signIn: "/logIn",
    },
    callbacks: {
        async session({ session, token, user }) {
            if(token){
                session.user.email = token.email;
                session.user.role = token.role
            }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if(user){
                token.email = user.email;
                token.role = user.role;
            }
            return token
        }
    }
}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }