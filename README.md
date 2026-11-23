# Pershant Parkash, portfolio

Built with Next.js, TypeScript and Tailwind CSS.

```bash
npm run dev    # http://localhost:3000
npm run build
```

## Updating content

All text (projects, videos, experience, skills, contact) is in `app/content.ts`.

### Add an Instagram video

1. Copy the code from the reel link: `instagram.com/reel/CODE/`
2. Save a 9:16 cover as `public/reels/CODE.webp`
3. Add an entry at the top of `reels` in `app/content.ts`

## Deploying

The site address defaults to https://pershant-parkash.vercel.app. Set `NEXT_PUBLIC_SITE_URL` if you move to a custom domain.
