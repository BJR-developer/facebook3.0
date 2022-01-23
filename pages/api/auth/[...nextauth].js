import FacebookProvider from 'next-auth/providers/facebook'
import NextAuth from 'next-auth'
export default NextAuth({
    providers: [
      // OAuth authentication providers...
      FacebookProvider({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET  
      }),
    ],
    callbacks:{
      redirect({ url, baseUrl   }) {
        if (url.startsWith(baseUrl)) return url
        // Allows relative callback URLs
        else if (url.startsWith("/")) return new URL(url, baseUrl).toString()
        return baseUrl
      }
    }
  })