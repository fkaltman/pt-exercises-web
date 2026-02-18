<img src="public/favicon.svg" alt="PT Exercises Web" width="96" />

# PT Exercises Web

A personal physical therapy exercise tracker built with React and TypeScript.

## Overview

Track daily PT exercises with per-set checkboxes, automatic daily resets, and a screen wake lock to keep your phone active during workouts. Exercises rotate on an odd/even day schedule.

## Tech Stack

- React 19 + TypeScript
- Vite
- localStorage for persistence

## Features

- **Set tracking** — Mark individual sets complete; exercises show strikethrough when all sets are done
- **Odd/even day rotation** — Some exercises only appear on odd-numbered days, with a toggle to preview them on even days
- **Daily reset** — Checkboxes automatically reset when the date changes
- **Wake lock** — Keeps the screen awake during workouts using the Screen Wake Lock API
- **Mobile-first** — Designed for use on a phone during exercise sessions

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `/dist` and can be deployed to any static host.

## Notes

Exercises are currently hard-coded in `src/data/exercises.ts`. Future versions may support more dynamic content such as user-configurable routines or API-driven exercise data.
