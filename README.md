# Felix Rides - Driven For You

Luxury taxi and chauffeur website built with Next.js 14 App Router, Tailwind CSS, Framer Motion, Lucide icons, Google Places Autocomplete, EmailJS, and Replicate.

## Local setup

1. Install dependencies:
   - `npm install`
2. Create `.env.local` with:
   - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key`
   - `REPLICATE_API_TOKEN=your_replicate_api_token`
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key`
3. Run locally:
   - `npm run dev`
4. Build for production:
   - `npm run build`

## Pages

- `/` Home page with hero booking widget, fleet preview, testimonials, CTA
- `/fleet` Fleet listing with six luxury vehicles
- `/book` Full booking form and confirmation state
- `/services` Chauffeur service categories
- `/contact` Contact form, business details, and map embed

## API route

- `POST /api/generate-fleet-image`
  - body: `{ "vehicleName": "BMW 5 Series" }`
  - uses Replicate model `black-forest-labs/flux-schnell`
  - caches URLs in-memory per runtime

## Deployment (Vercel)

1. Push repository to GitHub.
2. Import the repo in Vercel.
3. Add all environment variables in project settings.
4. Deploy.
