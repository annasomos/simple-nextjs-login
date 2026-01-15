This is a simple Next.js application with a simple login form.

The form consists of username and password mandatory fields. On submit, it stores them in a cookie (Base64 encoded).
After login, the user is redirected to the logged in page (extra feature) that welcomes the user and contains a logout button.
The logout button clears the cookie and redirects back to the login page.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Visit the app

Visit the [Simple Next.js Login](https://simple-nextjs-login.vercel.app/) app!
