# Project Context

## Purpose
**cypher** is an AI-powered React component generator that creates production-ready components by analyzing API documentation in real-time. Built with **Next.js 15**, **AI SDK v5**, **Google Gemini 2.5 Flash**, and **Origin UI**.

### Key Goals
- Enable developers to generate production-ready React components through natural language descriptions
- Provide intelligent API documentation analysis and integration guidance
- Create a split-screen interface for real-time component preview and code editing
- Support multi-source documentation scraping with smart content filtering
- Deliver components that follow modern React patterns and accessibility standards

## Tech Stack
- **Framework**: Next.js 15 (App Router) with React 19
- **Language**: TypeScript 5 with strict type checking
- **AI Integration**: AI SDK v5 with Google Gemini 2.5 Flash
- **UI Library**: Origin UI (Radix UI primitives) with Tailwind CSS 4
- **Styling**: Tailwind CSS 4 with custom design tokens
- **State Management**: React hooks (useState, useEffect, useCallback)
- **Form Handling**: React Hook Form with Zod validation
- **Code Editor**: CodeMirror 6 for syntax highlighting
- **3D Graphics**: Spline for interactive 3D backgrounds
- **Animation**: Framer Motion for smooth transitions
- **Web Scraping**: Firecrawl for enhanced documentation analysis
- **Icons**: Lucide React for consistent iconography
- **Deployment**: Vercel (optimized for Next.js)

## Project Conventions

### Code Style
- **Language**: TypeScript with strict mode enabled
- **Imports**: Use absolute imports with `@/` prefix for project root
- **Components**: Functional components with TypeScript interfaces
- **Naming**: camelCase for variables/functions, PascalCase for components, kebab-case for files
- **Quotes**: Single quotes for strings, double quotes for JSX attributes
- **Semicolons**: Required for all statements
- **Line Length**: 100 characters maximum
- **Indentation**: 2 spaces (no tabs)
- **Trailing Commas**: ES5 style (no trailing commas)
- **File Extensions**: `.tsx` for React components, `.ts` for utilities, `.json` for config

### Architecture Patterns
- **App Router**: Next.js 15 App Router for routing and layouts
- **Server Components**: Prefer Server Components over Client Components
- **API Routes**: RESTful API routes in `/app/api/` directory
- **Component Structure**: Single component per file with clear separation of concerns
- **State Management**: Local state with React hooks, no global state management
- **Error Handling**: Try-catch blocks with user-friendly error messages
- **Loading States**: Skeleton loaders and proper loading indicators
- **Mock Data**: Simulated API responses for component previews
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support

### Testing Strategy
- **Unit Tests**: Jest/React Testing Library for component testing
- **Integration Tests**: API route testing with mock data
- **E2E Tests**: Playwright for user journey testing (planned)
- **Manual Testing**: Component preview in development mode
- **Error Scenarios**: Test all error states and edge cases
- **Performance**: Lighthouse audits for Core Web Vitals
- **Accessibility**: axe-core testing for WCAG compliance
- **Coverage Goal**: 80%+ code coverage for critical paths

### Git Workflow
- **Branch Strategy**: Feature branches from `main`, PR-based development
- **Commit Messages**: Conventional commits format: `type(scope): description`
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation updates
  - `refactor:` for code restructuring
  - `test:` for test additions/modifications
  - `chore:` for maintenance tasks
- **Pull Requests**: Required for all changes with description and testing notes
- **Code Review**: Required approval before merge
- **Main Branch**: Protected with required status checks
- **Release Tags**: Semantic versioning (v1.0.0) for production releases

## Domain Context
This project is an AI-powered code generation platform that transforms natural language descriptions and API documentation into production-ready React components. Key domain concepts:

- **Component Generation**: Converting user requests into functional React components
- **Documentation Intelligence**: Smart analysis of API docs with relevance filtering
- **Split-Screen Interface**: Real-time preview alongside code editing
- **Mock Data Integration**: Simulated API responses for component demonstrations
- **Origin UI System**: Consistent design tokens and component patterns
- **Sandbox Environment**: Safe execution of generated components
- **Multi-API Support**: Parallel analysis of multiple documentation sources
- **Context Filtering**: AI-powered content relevance based on user requests
- **Production Readiness**: Generated code follows React best practices

## Important Constraints
- **AI API Limits**: Google Gemini rate limits and token quotas
- **Web Scraping**: Firecrawl API limits and site-specific restrictions
- **Component Sandbox**: Iframe execution for security but limited API access
- **Build Performance**: Next.js build optimization for fast deployments
- **Bundle Size**: Component library dependencies impact on load times
- **Browser Compatibility**: Modern browsers only (Chrome, Firefox, Safari, Edge)
- **Mobile Responsiveness**: Touch-friendly interface across all screen sizes
- **SEO Optimization**: Server-side rendering for component documentation
- **Security**: Input sanitization and XSS prevention in generated code
- **Accessibility**: WCAG 2.1 AA compliance for all user interfaces

## External Dependencies
- **Google Gemini 2.5 Flash**: Primary AI model for component generation
- **Firecrawl API**: Enhanced web scraping for documentation analysis
- **Vercel Platform**: Deployment and hosting infrastructure
- **npm Registry**: Package distribution and version management
- **Spline**: 3D background graphics and animations
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling framework
