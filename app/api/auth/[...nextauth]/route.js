import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import mongoose from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment';
import connectDb from '@/db/connectDb';

export const authoptions = {
    providers: [
        // OAuth authentication providers...
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,

        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider == 'github') {
                await connectDb();
                //check if user already exists
                const currentUser = await User.findOne({ email: user.email })
                if (!currentUser) {
                    //if not, create a new user
                    const newUser = await User.create({
                        email: user.email,
                        username: user.email.split('@')[0],
                    });
                }

                return true;
            }
        },
        async session({ session, user, token }) {
            const dbUser = await User.findOne({ email: session.user.email });
            console.log(dbUser);
            session.user.name = dbUser.username;
            return session
        },
    }
}

const handler = NextAuth(authoptions);
export { handler as GET, handler as POST };