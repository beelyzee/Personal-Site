# William Zhang Mortgage Lead Website

Production-ready lead-generation site for a San Francisco purchase-focused loan officer.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start local development:
```bash
npm run dev
```

3. Open:
`http://localhost:3000`

4. Build for production:
```bash
npm run build
npm run start
```

## Placeholders To Replace Before Launch

- `PHONE_NUMBER` in `src/data/site.ts`
- `PHONE_TEL` in `src/data/site.ts`
- `CONTACT_EMAIL` in `src/data/site.ts`
- `SITE_URL` in `src/data/site.ts`
- `REVIEW_URL` in `src/data/site.ts`
- `NMLS_ID` in `src/data/site.ts`
- `DRE_ID` in `src/data/site.ts`
- `BOOKING_URL` in `src/data/site.ts`

## How to connect Supabase later

1. Set environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (or `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

2. Create a `leads` table in Supabase with fields matching `LeadPayload` in `src/types/lead.ts`.

3. Update `src/app/api/leads/route.ts`:
- This route already inserts into Supabase using `createSupabaseServerClient` from `src/lib/supabase/server.ts`.

4. Keep validation and API payload shape in sync:
- `src/lib/validations/lead.ts`
- `src/types/lead.ts`

## Where to update phone number, links, and licensing info

All business/contact values are centralized in:
- `src/data/site.ts`

This includes:
- Phone number and tel link
- Email
- Website URL and review URL
- NMLS and DRE placeholders
- Service area
- CTA labels
- Footer/estimate disclaimer text
