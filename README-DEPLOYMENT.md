This is a Next.js application for Eden & Hearth.

## Framework Detection
- Framework: Next.js
- Language: TypeScript
- Package Manager: npm

## Build Commands
- Install: `npm ci`
- Build: `npm run build`
- Start: `npm start`

## Verification
Local build works: 22 pages generated successfully.

Vercel should auto-detect this as Next.js based on:
- package.json with "next" dependency
- next.config.js file
- app/ directory structure
- No vercel.json (auto-detection)
