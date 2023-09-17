import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'

export const authOptions={
    providers : [
        GoogleProvider({
            clientId: 
        })
    ]
}


const handler = NextAuth({
  ...
})

export { handler as GET, handler as POST }