# Ecommerce + Admin + CMS

## Tools
- React
- Next 13
- Typescript
- Tailwind
- Cleck (authentication)
- PrismaJs (db)
- Shadcn
- Lucide-react
- Cloudinary
- Stripe (to buy)
- Zustand
- Axios

The proyect is done

## Install

1. Clone this repository
2. Install all dependencies
````
  npm install
```
3. Create file .env and put all environment variables with your own
```
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
  CLERK_SECRET_KEY=


  NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
  NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
  NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
  NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

  DATABASE_URL=''


  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
  STRIPE_API_KEY=

  FRONT_END_STORE_URL=http://localhost:3000
  STRIPE_WEBHOOK_SECRET=
```

4. Push the db with planescale
```
  npx prisma generate
  npx prisma db push
```

5. Run the application
```
  npm run dev
```