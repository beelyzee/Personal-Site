# William Zhang Real Estate

Premium Next.js real-estate website for San Francisco buyers and sellers. The project includes marketing pages, neighborhood SEO pages, Supabase-backed lead capture flows, and a Supabase-auth admin dashboard scaffold.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui primitives
- Framer Motion
- Supabase
- Vercel-ready deployment

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy environment template:
```bash
copy .env.example .env.local
```

3. Fill in:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_STORAGE_BUCKET`

4. Start development:
```bash
npm run dev
```

5. Production verification:
```bash
npm run lint
npm run build
```

## Supabase setup

1. Run [schema.sql](</C:/Users/willi/Documents/New project/supabase/schema.sql>) in Supabase SQL Editor.
2. Create at least one admin user in Supabase Auth.
3. Ensure the environment variables above are set locally and in Vercel.
4. Optional: upload downloadable guides into the storage bucket referenced by `SUPABASE_STORAGE_BUCKET`.

## Deployment

1. Push the repo to GitHub.
2. Import the project into Vercel.
3. Add environment variables from `.env.example`.
4. Redeploy after any environment change.

## Project areas

- Public pages live in `src/app`
- Shared UI components live in `src/components`
- Seeded content lives in `src/data`
- Validation lives in `src/lib/validations`
- Supabase helpers live in `src/lib/supabase`
- Admin pages live under `src/app/admin`

## Notes

- Public marketing pages render from seeded content first, with Supabase content fetch fallback support already scaffolded.
- Public forms submit to route handlers for contact, buyer, seller, valuation, consultation, and guide download flows.
- The admin dashboard is Supabase-auth protected and ready to expand with fuller CRUD workflows.
