import GoogleProvider from 'next-auth/providers/google'
import connectDB from '@/config/database'
import User from '@/models/User'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      await connectDB()
      const userExists = await User.findOne({ email: profile.email })
      if (!userExists) {
        /**
        const username =
          profile.name.length > 30
          ? profile.name.substring(0, 30)
          : profile.name

        await User.create({
          email: profile.email,
          username,
        })
         */
        return false
      }
      // return true to allow sign in
      return true
    },
    // modifies the session object
    async session({ session }) {
      const user = await User.findOne({ email: session.user.email })
      session.user.id = user._id.toString()
      session.user.role = user.role

      return session
    },
  },
}
