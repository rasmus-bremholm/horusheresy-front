# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (run this after code changes)

## Architecture Overview

This is a Warhammer 30K Horus Heresy API documentation website built with **Next.js 15** and **TypeScript**. It serves both as API documentation and a functional REST API for Space Marine Legion data.

### Hybrid Data Architecture

The application uses a dual data layer:

1. **PostgreSQL Database** (`app/lib/database.ts`) - Stores core legion data accessed via API routes
2. **Sanity CMS** (`app/lib/sanity.ts`) - Manages documentation content, API endpoint descriptions, and news articles

### API Layer

**Route Structure:**
- `/api/legions` - All legions with optional `?traitor=true/false` query parameter
- `/api/legion/[id]` - Individual legion by ID
- `/api/test` - Test endpoint, not used. Just for testing.

**Security:** All API routes are protected by API key middleware (`middleware.js`) that validates `x-api-key` header.

### Frontend Structure

**Core Pages:**
- `/` - Landing page with feature overview
- `/legions` - Legion listing page
- `/legions/[id]` - Individual legion detail pages
- `/api-docs` - API documentation (Sanity CMS powered)
- `/studio/[[...index]]` - Sanity Studio admin interface

**Component Architecture:**
- Shared layout with `Navbar`, `Footer`, and `Divider` components
- Feature cards, code examples, and documentation sections
- SCSS modules for styling with organized structure in `app/styles/`

### Sanity CMS Integration

The CMS manages documentation through these schema types:
- `apiEndpoint` - API endpoint documentation with parameters, responses, code examples
- `docPage` - General documentation pages
- `newsArticle` - News and updates
- `endpointCategory` - Grouping for API endpoints

**Content Query:** All documentation content is fetched via the `DOC_NEWS_ENDPOINT_QUERY` in `app/lib/queries.ts`.

### Styling System

Uses **SCSS** with a structured approach:
- `app/styles/_variables.scss` - Design tokens
- `app/styles/_base.scss` - Base styles
- `app/styles/components/` - Component-specific styles
- `app/styles/layout/` - Layout-specific styles
- `app/styles/utilities/` - Utility classes
- Component-level `.module.scss` files for scoped styles

#### Current CSS Issues to Address
1. Convert deprecated `@import` statements to `@use` syntax
2. Replace deprecated `darken()` and `lighten()` functions with `color.adjust()`
3. Implement design system variables consistently across components
4. Add styling for news section with fade-out overflow effect
5. Clean up component-specific SCSS modules

##### File Structure
- `/app/styles/` - Design system variables and mixins - try your best to follow theese standard.
- `/app/components/*.module.scss` - Component-specific styles, these are a mess and should be fixed by AI.
- `/app/api-docs/api-docs.module.scss` - Main documentation styles

##### Priority Tasks
1. SCSS deprecation warnings cleanup
2. Consistent spacing and typography
3. Cleanup and fix the module.scss files.

#### Design System
- Black/white minimalist theme
- Using CSS Modules
- highlight.js for syntax highlighting
- Focus on clean, readable documentation layout

### Environment Configuration

Required environment variables:
- `POSTGRES_URL` - Database connection
- `API_KEY` - API authentication
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Sanity dataset (defaults to "production")

### Development Notes

- Project is currently in TypeScript migration (version 1.0.0 complete)
- Uses Inter font family via next/font
- Vercel deployment ready with caching headers on API routes
- Sanity Studio accessible at `/studio` for content management
