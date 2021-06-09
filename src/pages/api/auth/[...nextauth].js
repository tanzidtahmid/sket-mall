import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,  //650135736804-ee4t6dvnt7n6t6q5q6s3gs7rs3c8boid.apps.googleusercontent.com
      clientSecret: process.env.GOOGLE_SECRET   //TeZIIM1mFIle5ZplmOMrAnw9 
    }),
    // ...add more providers here
  ],
});