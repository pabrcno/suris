# Suris Palindrome

A simple and efficient application to check if a string is a palindrome, built with **Next.js**, **Drizzle ORM**, **React Query**, and more.

---

## Getting Started

First, start the development server using **npm**:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app running.

You can start editing the app by modifying `app/page.tsx`. The page will automatically update as you edit the file.

This project uses `next/font` to automatically optimize and load **Geist**, a new font family by Vercel.

---

## Using Local Memory or PostgreSQL

For development or testing with an **in-memory database**, run:

```bash
npm run dev:memory
```

---

## Project Structure

```bash
src/
├── app/
│   ├── api/palindrome/   # API route for palindrome checking
│   ├── db/               # Drizzle ORM database schema
│   ├── hooks/            # Custom React hooks
│   ├── providers/        # Context providers (e.g., React Query)
│   ├── test/             # Unit tests (Vitest)
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── drizzle.config.ts     # Drizzle ORM configuration
├── package.json
├── README.md
├── tsconfig.json
└── vitest.config.ts      # Vitest configuration
```

Key folders include:

- **app/**: Contains pages, API routes, and components.
- **api/palindrome/**: Handles the palindrome-checking API endpoint.
- **db/**: Drizzle ORM schema definitions.
- **hooks/**: Custom reusable React hooks.
- **providers/**: Context providers (e.g., for state management).
- **test/**: Unit tests for the app.

---

## Available Scripts

Using **npm**, you can run:

```bash
- npm run dev         # Start the development server.
- npm run dev:memory  # Start dev server with an in-memory database.
- npm run build       # Build the production application.
- npm run start       # Start the production server.
- npm run start:memory # Start production server with an in-memory database.
- npm run lint        # Run ESLint for code quality checks.
- npm run db:generate # Generate SQL schema from Drizzle.
- npm run db:push     # Apply pending database migrations.
- npm run db:studio   # Open Drizzle Studio for database management.
- npm run test        # Run unit tests with Vitest.
- npm run test:watch  # Watch mode for unit tests.
- npm run test:coverage # Run tests with coverage report.
```

---

## Libraries Used

- **next**: Server-side rendered React framework.
- **@tanstack/react-query**: Powerful data fetching and caching library.
- **drizzle-orm**: Lightweight TypeScript ORM for databases.
- **postgres**: Node.js driver for PostgreSQL.
- **zod**: TypeScript-first schema declaration and validation.
- **drizzle-zod**: Generates Zod schemas from Drizzle ORM schemas.
- **vitest**: Fast, modern unit testing framework.

---

## Centralizing Types with Drizzle Zod

We use **drizzle-zod** to centralize and synchronize types across the database and application:

- Define schemas in `app/db/schema.ts` using Drizzle ORM.
- Automatically generate corresponding Zod schemas.
- Use these Zod schemas for:
  - Validating incoming/outgoing data.
  - Strong typing in API handlers and client code.

This ensures consistent, type-safe data handling and reduces type mismatch errors.

---

## Using React Query for Cleaner Development

React Query simplifies data fetching and caching by:

- Providing hooks like `useQuery` and `useMutation`.
- Automatically caching fetched data.
- Supporting background refetching.
- Handling optimistic updates and retries.

Using React Query leads to cleaner, more maintainable data-fetching logic and a better overall user experience.

---

## Palindrome Checking Function

We use an efficient **Two-Pointer Approach** to check if a string is a palindrome:

- **Time Complexity**: O(n) (where n is the string length).
- **Space Complexity**: O(1) (constant extra memory).

Instead of reversing the string, two pointers compare characters from both ends, improving performance and memory usage.

---

