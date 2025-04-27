
# Suris Palindrome

## Getting Started

First, run the development server using **npm**:

```bash
npm run dev
Open http://localhost:3000 with your browser to see the result.

We can start editing the page by modifying app/page.tsx. The page auto-updates as We edit the file.

This project uses next/font to automatically optimize and load Geist, a new font family for Vercel.   
Using Local Memory or PostgreSQL
To use an in-memory database (for development or testing):

## Run the development server with the dev:memory script:
npm run dev:memory
```

## Project Structure

```bash
src/
├── app/
│   ├── api/palindrome/
│   │   └── route.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── db/             # Drizzle database related files
│   │   └── schema.ts   # Your database schema definition
│   ├── hooks/          # Custom React hooks
│   ├── providers/      # React Context providers (e.g., for React Query)
│   └── test/           # Unit tests
├── ...
├── drizzle.config.ts   # Drizzle configuration file
├── package.json
├── README.md
├── tsconfig.json
└── vitest.config.ts    # Vitest configuration file

```
This structure is typical for a Next.js application using the app router. Key directories include:

- app: Contains your application's routes, components, and page logic.
- app/api/palindrome: Defines the API endpoint for palindrome checking.
- src/db: Houses your Drizzle ORM schema definitions.
- src/hooks: Contains custom React hooks to encapsulate reusable logic.
- src/providers: Used for setting up global state or context providers like QueryClientProvider for React Query.
- src/test: Contains your unit tests written with Vitest.
drizzle.config.ts: The configuration file for Drizzle Kit, specifying how to connect to your database and where to find your schema.

##  Available Scripts (using npm)
Here are the commands We can run in your project:

```bash
- npm run dev: Starts the Next.js development server.
- npm run dev:memory: Starts the Next.js development server using an in-memory database (for development/testing).
- npm run build: Builds the Next.js application for production.
- npm run start: Starts the Next.js production server.
- npm run start:memory: Starts the Next.js production server using an in-memory database.
- npm run lint: Runs ESLint to find code style and potential error issues.
- npm run db:generate: Generates SQL schema definitions based on your Drizzle schema.
- npm run db:push: Applies pending database migrations to your database schema.
- npm run db:studio: Opens the Drizzle Studio, a visual database management tool.
- npm run test: Runs all unit tests using Vitest.
- npm run test:watch: Runs unit tests in watch mode, re-running tests on file changes.
- npm run test:coverage: Runs unit tests with code coverage reporting.
```
## Libraries Used
This project leverages the following key libraries:

- next: The core framework for building server-rendered React applications with features like routing, API routes, and more.
- @tanstack/react-query: A powerful asynchronous state management library for fetching, caching, synchronizing, and updating data in your React applications, leading to cleaner data fetching logic and automatic cache management.
- drizzle-orm: A lightweight and type-safe TypeScript ORM (Object-Relational Mapper) for interacting with your database. It provides a way to define your database schema in TypeScript and perform database queries in a type-safe manner.
- postgres: The Node.js driver used by Drizzle ORM to connect and interact with PostgreSQL databases.
- zod: A TypeScript-first schema declaration and validation library. It's used here in conjunction with drizzle-zod to automatically generate Zod schemas from your Drizzle database schema, ensuring type safety across your application.
- drizzle-zod: A utility that bridges Drizzle ORM and Zod, allowing us to easily create Zod schemas based on your Drizzle database schema definitions. This helps centralize your data types and ensures consistency between your database and your application logic.
- vitest: A fast and modern unit testing framework.

## Centralizing Types with Drizzle Zod
We are using drizzle-zod to centralize your data types. Here's how it works:

Define your database schema using Drizzle ORM in files like app/db/schema.ts. This schema defines your tables, columns, and their types within the database.

Use drizzle-zod to automatically generate Zod schemas based on your Drizzle schema. These Zod schemas represent the shape of your database tables and their data.

Import and use these generated Zod schemas throughout your application for:

Data validation: Ensuring that data coming from the client or other sources conforms to your database structure.
Type inference: Providing strong typing for data fetched from or sent to your database, improving code safety and developer experience.
This approach ensures that your application's data types are always in sync with your database schema, reducing the risk of type-related errors.

## Using React Query for Cleaner Development and Cache Management
We are employing React Query to streamline your data fetching and management. React Query offers several benefits:

Simplified Data Fetching: It provides hooks like useQuery to easily fetch data from your API endpoints.
Automatic Caching: Fetched data is automatically cached, reducing redundant API calls and improving performance.
Background Updates: React Query can automatically refetch data in the background to keep it fresh.
Optimistic Updates: It allows We to simulate successful updates before the server confirms them, providing a smoother user experience.
Error Handling and Retries: Built-in mechanisms for handling API errors and automatically retrying failed requests.
Synchronization: Simplifies keeping your application state in sync with the server data.
By using React Query, We can write cleaner and more maintainable data fetching logic, and benefit from its robust caching and state management capabilities.

## Palindrome Checking Function
This isPalindrome function efficiently checks if a given string is a palindrome (reads the same forwards and backward) by following these steps:

Two-Pointer Approach:

The two-pointer approach is efficient because it iterates through the string only once, resulting in a time complexity of O(n), where n is the length of the cleaned string. It also uses a constant amount of extra space for the pointers, giving it a space complexity of O(1), which is more memory-efficient than reversing the string.


