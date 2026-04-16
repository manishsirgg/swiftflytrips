# Swift Fly Trips

Modern, conversion-focused OTA platform built with **Next.js App Router + TypeScript + Tailwind + Supabase**.

## Features Implemented
- Search-first homepage with multi-tab booking widget and sticky nav
- Dedicated pages for Flights, Hotels, Holidays, Visa, Custom Trip, Blog, About, Contact, Activities, Insurance
- Dynamic package details route (`/holidays/[slug]`)
- Reusable Travelpayouts widget components and WhatsApp CTA integration
- Supabase-ready schema with role-aware RLS policies
- SEO support with metadata, sitemap, robots, and JSON-LD utility
- Admin dashboard scaffold for package/blog/inquiry management

## Folder Structure

```txt
app/
  api/inquiries/route.ts
  activities/page.tsx
  about/page.tsx
  blog/page.tsx
  contact/page.tsx
  custom-trip/page.tsx
  dashboard/page.tsx
  flights/page.tsx
  holidays/page.tsx
  holidays/[slug]/page.tsx
  hotels/page.tsx
  insurance/page.tsx
  login/page.tsx
  my-trips/page.tsx
  signup/page.tsx
  visa/page.tsx
  globals.css
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  forms/inquiry-form.tsx
  layout/footer.tsx
  layout/navbar.tsx
  layout/top-strip.tsx
  sections/hero-booking-widget.tsx
  sections/newsletter.tsx
  sections/package-card.tsx
  sections/whatsapp-float.tsx
  widgets/travelpayouts-widget.tsx
lib/
  data/site.ts
  seo/json-ld.ts
  supabase/client.ts
  supabase/server.ts
  utils.ts
supabase/
  schema.sql
.env.example
```

## Environment Variables
Copy `.env.example` to `.env.local` and provide values:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_TRAVELPAYOUTS_MARKER`
- `NEXT_PUBLIC_TRAVELPAYOUTS_FLIGHTS_WIDGET_URL`
- `NEXT_PUBLIC_TRAVELPAYOUTS_HOTELS_WIDGET_URL`
- `NEXT_PUBLIC_TRAVELPAYOUTS_ACTIVITIES_WIDGET_URL`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

## Component Architecture
- **Layout**: Top strip, sticky nav, footer.
- **Conversion components**: Hero booking tabs, package cards, newsletter, whatsapp float.
- **Forms**: `InquiryForm` using React Hook Form.
- **Widgets**: `TravelpayoutsWidget` wrapper keeps external inventory replaceable later by TBO/Amadeus/Hotelbeds APIs.

## Supabase Schema
`supabase/schema.sql` includes:
- users, profiles, destinations, packages, package_categories, package_itineraries
- visa_requests, custom_trip_requests, blog_posts, testimonials
- newsletter_subscribers, saved_trips, inquiries, faqs
- agents, corporate_clients, bookings
- RLS policies for admin/customer/guest/agent/corporate patterns

## Example API Route
`POST /api/inquiries`
- accepts inquiry payload from forms
- returns JSON confirmation (replace with direct Supabase insert in production)

## Example Supabase Queries

```ts
// fetch active packages
const { data } = await supabase
  .from("packages")
  .select("id, slug, title, starting_price")
  .eq("is_active", true)
  .order("created_at", { ascending: false });

// save a trip to wishlist
await supabase.from("saved_trips").insert({
  user_id: user.id,
  package_id: packageId
});

// customer inquiry history
const { data: inquiries } = await supabase
  .from("inquiries")
  .select("id, subject, status, created_at")
  .eq("user_id", user.id);
```

## Travelpayouts Integration Instructions
1. Set widget URLs/marker in `.env.local`.
2. Edit `components/widgets/travelpayouts-widget.tsx` if widget provider needs extra query params.
3. Global tracking script is loaded in `app/layout.tsx` using `next/script`.
4. Replace widgets progressively with API adapters without changing page UX (component boundary is already isolated).

## Adding New Holiday Packages Later
1. Insert new destination/category/package rows into Supabase.
2. Add itinerary rows in `package_itineraries`.
3. Ensure slug is unique and SEO friendly.
4. Display in `app/holidays/page.tsx` query.
5. Link detail page via `/holidays/[slug]` route.

## Deployment (Vercel)
1. Push repository to Git provider.
2. Import project in Vercel.
3. Configure environment variables from `.env.example`.
4. Build command: `npm run build`
5. Output: Next.js default.
6. Add Supabase URL keys and Google OAuth redirect URLs in dashboard.

## Notes
- Scaffold is production-structured and modular.
- Replace placeholders with real CMS/admin APIs and secure server actions before go-live.
