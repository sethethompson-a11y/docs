# Weekly Golf Mover Game

This repository now includes a production-ready frontend for your weekly golf game backend.

## First-time setup note

Please customize `AGENTS.md` for your project-specific terminology, style rules, and documentation boundaries.

## Project structure

- `frontend/`: Next.js + TypeScript + Tailwind app for leaderboard display.
- Backend scripts and services (already implemented): ESPN ingest, scoring, webhook, and history persistence.

## Backend usage

Run these commands from your backend root (where your Python files live).

### Run webhook API

```bash
python webhook.py
```

This should expose:

- `GET /results` for frontend consumption.

### Run weekly scoring workflow

```bash
python run_week.py
```

This updates weekly outputs, including `data/latest_results.json`.

## Frontend usage

Run these commands from `frontend/`.

### Install

```bash
npm install
```

### Local development

```bash
npm run dev
```

Open `http://localhost:3000`.

By default, the app fetches results from:

- `http://localhost:5000/results`

Optional override:

```bash
NEXT_PUBLIC_RESULTS_URL=https://your-api-domain/results npm run dev
```

### Production build

```bash
npm run build
npm start
```

## Deploy frontend to Vercel

1. Push this repository to GitHub.
2. Import the repo into Vercel.
3. Set the project root directory to `frontend`.
4. (Optional) Add `NEXT_PUBLIC_RESULTS_URL` as an environment variable.
5. Deploy.

No code changes are required for Vercel deployment.
