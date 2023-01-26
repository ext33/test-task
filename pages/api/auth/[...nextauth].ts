import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_KEY || ""
        })
    ],
    theme: {
        colorScheme: "light",
        logo: "/logo.svg"
    }
}

export default NextAuth(authOptions)
