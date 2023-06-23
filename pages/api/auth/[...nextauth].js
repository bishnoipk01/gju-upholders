import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { email, password } = credentials;
        const result = await fetch('/api/users/login', {
          method: 'post',
          body: JSON.stringify({ email, password }),
          headers: { 'content-type': 'application/json' },
        });
        const res = await result.json();
        const user = res.data.user;
        if (user) {
          return user;
        } else return null;

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token;

      return session;
    },
  },

  pages: {
    signIn: '/user/login',
  },
};
export default NextAuth(authOptions);
