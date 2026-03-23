# Jules Goy - Portfolio

Personal portfolio website built with Next.js to present my profile, background, and projects.

## Pages

- `/` - Home
- `/about` - About me + timeline
- `/projects` - Projects showcase

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Motion (`motion/react`) for animations
- shadcn/ui-style components (customized)
- Vercel Analytics
- Vercel Speed Insights

## Project Structure

```text
app/
	about/page.tsx
	projects/page.tsx
	layout.tsx
	page.tsx
components/
	pages/home-page.tsx
	timeline/
		timeline-items.tsx
		timeline.tsx
	ui/
	dots-bg.tsx
	footer.tsx
	menu-bar.tsx
	project-card.tsx
	social-links.tsx
	stack.tsx
lib/
	data.tsx
	types.tsx
	utils.ts
```

## Content Source

Main portfolio content (social links, menu entries, timeline items) is centralized in `lib/data.tsx`.

## Scripts

- `pnpm dev` - Run development server
- `pnpm build` - Create production build
- `pnpm start` - Run production server
- `pnpm lint` - Run ESLint
- `pnpm lint-fix` - Format project with Prettier

## Deployment

This project is intended for deployment on Vercel, with Analytics and Speed Insights enabled in the root layout.
