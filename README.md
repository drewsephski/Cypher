# Code Cypher - AI Component Studio

## Overview

**cypher** is an AI-powered React component generator that creates production-ready components by analyzing API documentation in real-time. Built with **Next.js 15**, **AI SDK v5**, **Google Gemini 2.5 Flash**, and **Origin UI**.

## Snapshots

<p align="center">
  <img width="800" alt="image" src="https://github.com/user-attachments/assets/1b6577a3-5c3e-4a0e-81f3-701159f23a6c" />
</p>



---
### Key Features

- 🤖 **AI-Powered Generation**: Uses Google Gemini 2.5 Flash for intelligent component creation
- 🧠 **Smart Content Filtering**: AI-powered relevance filtering based on user requests (NEW!)
- 🌐 **Multi-API Integration**: Scrapes multiple documentation sources simultaneously with site-wide crawling
- 👀 **Live Preview**: Real-time component preview with split-screen interface
- 📚 **Smart Documentation**: Auto-generates installation guides and usage instructions
- 🎨 **Origin UI Design**: Professional, accessible components with modern design
- ⚡ **Production Ready**: TypeScript, error handling, and best practices built-in

**Tech Stack**: Next.js 15 + AI SDK v5.0.34 + Google Gemini 2.5 Flash + Origin UI + TypeScript

## 🚀 How It Works

1. **Describe Your Component**: Tell Cypher what you want to build
2. **Add Documentation URLs** (optional): Include API docs for enhanced scraping with Firecrawl
3. **Get Your Component**: Receive code, preview, and instructions instantly

## 💡 Example Usage

```
"create a pricing card with Stripe integration"
"build a user dashboard with authentication"
"design a checkout flow with payment processing"
"create a data table with Supabase integration"
```

## 1. Setup & Installation

### Prerequisites
- Node.js 18+
- pnpm (recommended)
- Google AI Studio API key
- Firecrawl API key (optional - for enhanced web scraping)

# Clone and install

### Environment Configuration

Create a `.env.local` file in the root directory:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
FIRECRAWL_API_KEY=your_firecrawl_key_here # Optional: For enhanced scraping
```

## 2. Example Usage

You can describe components directly or provide API docs for integration.

**Basic Components:**

```
"create a modern pricing card"
"build a contact form with validation" 
"design a hero section with call-to-action"
```

**Based on API Docs:**

```
"create a pricing card integrated with http://billingsdk.com/ http://dodopayments.com/"
"create a user profile with Supabase authentication"
"build a payment form integrated with Stripe"
"design a dashboard with real-time data from Firebase"
```

**Advanced Components:**

```
"create a multi-step form with progress tracking"
"build a data visualization dashboard with charts"
"design a e-commerce product catalog with filtering"
```

## 3. Why Origin UI?

We chose **Origin UI** over shadcn (as required) because it:
- Provides modern, accessible design tokens and prebuilt patterns
- Is less overused, making component outputs more unique
- Integrates smoothly with TailwindCSS and TypeScript

All generated components follow Origin UI conventions with full type safety.

## 4. Tools, Workflows & Trade-offs

**Tools & Stack:**
- **Next.js 15 (App Router)** → scalable architecture
- **AI SDK v5** → orchestration + tool integration
- **Gemini 2.5 Flash** → fast, reliable LLM generation
- **Origin UI + TailwindCSS** → design system & styling
- **CodeMirror 6** → syntax highlighting
- **Firecrawl** → enhanced web scraping and crawling

**Workflows:**
- Real-time streaming chat (split-screen: chat + preview)
- Multi-API Fetch URLs with parallel scraping
- Context passed into AI for accurate code generation
- Auto-generated usage docs for each component

**Key Components:**

- `app/chat/page.tsx` - Main split-screen interface
- `app/api/chat/route.ts` - AI chat endpoint with multi-API integration
- `lib/scrapeUtils.ts` - Web scraping with Firecrawl integration and fetch fallback
- `lib/tools/browseTool.ts` - Multi-API browser tool with smart filtering
- `components/navbar.tsx` - Reusable navigation component

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Google AI Studio for Gemini 2.5 Flash API
- Origin UI for beautiful component library
- Vercel AI SDK for seamless AI integration
- Next.js team for the amazing framework
- Firecrawl for enhanced web scraping capabilities

---

**Built with ❤️**

> 📋 **For detailed technical documentation, see [PROJECT_COMPLETION_REPORT.md](./PROJECT_COMPLETION_REPORT.md)**
