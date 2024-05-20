<p align="center">
    <img width="400" src="./assets//images/logo.png" alt="Property Pulse Logo">
</p>

<h1 align="center">Portfolio with custom CMS</h1>

## Description

[miloszbukaladotpl](https://miloszbukala.vercel.app/) is a fullstack application build with [NextJS](https://nextjs.org/) (the JavaScript framework for React) and a non-relational [MongoDB](https://www.mongodb.com/) data platform.

### Provided functionalities

```bash
√ Display information about me (who am I, what kind of technologie a use at work, projects I made and participate )
√ Data management system
and few more...
all of this using newest features provided in Next.js 14 ad Client and Server Component, calling API, creat actions, Context, google authentication,
```

## Installation and running the app

Clone the repository:

```bash
$ git clone https://github.com/gentlemil/portfolio/
```

Switch to the repo folder:

```bash
cd portfolio
```

Install dependencies:

```bash
$ npm install
```

Create an **.env** file and provide your own generated private keys for specific proeprties. Check the template below:

```bash
# https://www.mongodb.com
MONGODB_URI=

NEXT_PUBLIC_DOMAIN=http://localhost:3000
NEXT_PUBLIC_API_DOMAIN=http://localhost:3000/api

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_URL_SECRET=

# https://console.cloud.google.com
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# https://cloudinary.com
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Generate NEXTAUTH_URL_SECRET key by running the following command in the terminal:

```bash
openssl rand -base64 32
```

Now that we have created our project, we can run it. To do this, run the following command:

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

Feel free to contact with me and ask any question about the project. Enjoy!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
