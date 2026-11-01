# Phyo & Moe — Wedding Invitation

A responsive React and Vite wedding invitation styled with Tailwind CSS and custom CSS.

## Run locally

Requires Node.js 18 or newer. From this folder, run:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite. To create and preview a production build:

```powershell
npm.cmd run build
npm.cmd run preview
```

The project folder currently contains an ampersand in its name. The included
`.npmrc` selects PowerShell for npm scripts so they work from this Windows path.

## Personalize the invitation

Edit [`src/data/wedding.js`](./src/data/wedding.js) to update the sample wedding
date, ceremony and reception times and venues, map searches, timeline, and
gallery photos. Replace the sample date and venue information before sharing
the invitation.

The floating music control plays a gentle melody synthesized in the browser,
so no audio file or third-party music service is needed. The RSVP form currently
shows a confirmation in the browser only; connect it to an RSVP service or
backend to collect guest responses.
update