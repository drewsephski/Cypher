"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { Button } from "../../components/origin-ui/button"
import { Input } from "../../components/origin-ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/origin-ui/tabs"
import { ScrollArea } from "../../components/origin-ui/scroll-area"
import { Send, Code, Eye, Sparkles, Download, FileText, Github, ArrowRight, MessageSquareIcon, Copy, CheckCircle, RefreshCw, Trash2 } from "lucide-react"
import CodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { oneDark } from "@codemirror/theme-one-dark"
import { EditorView } from "@codemirror/view"
import { useTheme } from "next-themes"
import { SandboxedPreview } from "../../components/sandboxed-preview"
import Navbar from "../../components/navbar"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark as syntaxOneDark, oneLight as syntaxOneLight } from "react-syntax-highlighter/dist/esm/styles/prism"
import Link from "next/link"
import ThemeToggle from "../../components/theme-toggle"
import { toast } from "sonner"
import { Conversation, ConversationContent, ConversationEmptyState, ConversationScrollButton } from "../../components/ai-elements/conversation"
import { Message, MessageContent, MessageAvatar } from "../../components/ai-elements/message"
import { Response } from "../../components/ai-elements/response"
import { PromptInput, PromptInputTextarea, PromptInputToolbar, PromptInputTools, PromptInputSubmit, PromptInputAttachments, PromptInputAttachment } from "../../components/ai-elements/prompt-input"
import { Suggestions, Suggestion } from "../../components/ai-elements/suggestion"
import { Loader } from "../../components/ai-elements/loader"
import { Actions, Action } from "../../components/ai-elements/actions"
import { Artifact, ArtifactHeader, ArtifactTitle, ArtifactDescription, ArtifactActions, ArtifactAction, ArtifactContent, ArtifactClose } from "../../components/ai-elements/artifact"
import { Branch } from "../../components/ai-elements/branch"
import { Canvas } from "../../components/ai-elements/canvas"
import { ChainOfThought, ChainOfThoughtHeader, ChainOfThoughtStep, ChainOfThoughtContent, ChainOfThoughtSearchResults, ChainOfThoughtSearchResult, ChainOfThoughtImage } from "../../components/ai-elements/chain-of-thought"
import { CodeBlock, CodeBlockCopyButton } from "../../components/ai-elements/code-block"
import { Controls } from "../../components/ai-elements/controls"
import { Edge } from "../../components/ai-elements/edge"
import { Image } from "../../components/ai-elements/image"
import { InlineCitation } from "../../components/ai-elements/inline-citation"
import { Node } from "../../components/ai-elements/node"
import { Panel } from "../../components/ai-elements/panel"
import { Reasoning, ReasoningTrigger, ReasoningContent } from "../../components/ai-elements/reasoning"
import { Sources } from "../../components/ai-elements/sources"
import { Task } from "../../components/ai-elements/task"
import { Toolbar } from "../../components/ai-elements/toolbar"
import { ResizableChatLayout } from "../../components/resizable-chat-layout"
import CypherInstructionsModal from "../../components/cypher-instructions-modal"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  // Define error types for better type safety
  type ErrorType = 'api' | 'network' | 'validation' | 'rate_limit' | 'unknown';
  
  interface ErrorState {
    message: string;
    type: ErrorType;
    timestamp?: number;
    retryable?: boolean;
  }

  const [error, setError] = useState<ErrorState | null>(null)
  const [downloadSuccess, setDownloadSuccess] = useState(false)
  const [currentUserRequest, setCurrentUserRequest] = useState("")
  const [tokenUsage, setTokenUsage] = useState<{
    inputTokens: number
    outputTokens: number
    reasoningTokens: number
    cachedInputTokens: number
  }>({
    inputTokens: 0,
    outputTokens: 0,
    reasoningTokens: 0,
    cachedInputTokens: 0
  })

  const [generatedCode, setGeneratedCode] = useState(`function WelcomeHero() {
    return (
      <div className="w-full max-w-4xl mx-auto py-16 px-6 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Welcome to <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">cypher</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Transform your ideas into production-ready React components with AI. Just describe what you need, and we'll generate clean, type-safe code instantly.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#get-started"
              className="rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors duration-200"
            >
              Get started
            </a>
            <a href="#how-it-works" className="text-sm font-semibold leading-6 text-foreground hover:text-orange-500 transition-colors duration-200">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mt-16 flow-root sm:mt-24">
          <div className="-m-2 rounded-xl bg-card/50 p-2 ring-1 ring-border/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="rounded-md bg-background p-8 shadow-2xl ring-1 ring-border/10">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-orange-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                  <div className="flex-1 text-center text-sm font-medium text-muted-foreground">
                    Preview
                  </div>
                </div>
                <div className="text-center py-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Export as default for the preview
  window.default = WelcomeHero;`)

  const { theme } = useTheme()
  const [selectedTab, setSelectedTab] = useState("preview")

  // Extract component name from code
  const extractComponentName = (code: string): string => {
    const functionMatch = code.match(/function\s+(\w+)/)
    const constMatch = code.match(/const\s+(\w+)\s*=/)
    return functionMatch?.[1] || constMatch?.[1] || "Component"
  }

  // State for documentation results
  const [documentationResults, setDocumentationResults] = useState<any>(null)
  const [instructions, setInstructions] = useState<string>("")

  // AI-powered contextual analysis of documentation - moved to component level
  const analyzeDocumentationContext = async (documentationResults: any, userRequest: string) => {
    if (!documentationResults?.results?.length) return null

    try {
      const docContent = documentationResults.results.map((result: any) => ({
        url: result.url,
        title: result.title,
        content: result.content?.substring(0, 2000), // Limit content for analysis
        endpoints: result.apiEndpoints || [],
        analysis: result.analysis
      }))

      const analysisPrompt = `You are an API integration specialist. Create a concise, focused integration guide.

USER REQUEST: "${userRequest}"

DOCUMENTATION: ${JSON.stringify(docContent, null, 2)}

Generate a practical guide with these sections (keep under 400 words total):

**RELEVANT ENDPOINTS** (2-3 most important)
• List only endpoints directly needed for "${userRequest}"

**INTEGRATION STEPS** (3-4 steps)
1. Specific step for this use case
2. Next practical step
3. Final implementation step

**CODE EXAMPLE**
One focused code snippet for the main functionality

**AUTHENTICATION**
Required headers/auth method

**IMPORTANT NOTES** (2 key points)
• Most important issue to avoid
• Critical implementation detail

Focus only on what's needed for this specific use case. Be concise and practical.`

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: analysisPrompt }],
          analysis: true // Flag to indicate this is for analysis
        })
      })

      if (response.ok) {
        const analysisData = await response.text()
        return analysisData
      }
    } catch (error) {
      console.error('Failed to analyze documentation:', error)
    }
    return null
  }

  // Enhanced component instructions with AI-powered contextual analysis
  const generateInstructions = async (code: string, userRequest?: string, docContext?: any): Promise<void> => {
    const componentName = extractComponentName(code)
    const hasState = code.includes("useState")
    const hasProps = code.includes("props") || code.includes(": {") || code.includes("interface")
    const hasInteractivity = code.includes("onClick") || code.includes("onSubmit") || code.includes("onChange")
    const hasFetch = code.includes("fetch(") || code.includes("fetch ")
    const hasAPI = code.includes("/api/") || code.includes("http")

    // Extract component props and their types for detailed documentation
    const extractComponentProps = (code: string) => {
      const props: Array<{ name: string; type: string; optional: boolean; description: string }> = []

      // Look for interface definitions
      const interfaceMatch = code.match(/interface\s+\w+Props\s*\{([^}]+)\}/)
      if (interfaceMatch) {
        const interfaceContent = interfaceMatch[1]
        const propMatches = interfaceContent.match(/(\w+)(\?)?\s*:\s*([^;\n]+)/g)
        if (propMatches) {
          propMatches.forEach((match) => {
            const matchResult = match.match(/(\w+)(\?)?\s*:\s*(.+)/)
            if (matchResult) {
              const [, propName, optional, propType] = matchResult
              if (propName && propType) {
                props.push({
                  name: propName,
                  type: propType.trim(),
                  optional: !!optional,
                  description: `${propName} property of type ${propType.trim()}`,
                })
              }
            }
          })
        }
      }

      // Look for destructured props in function parameters
      const destructuredMatch = code.match(/$$\s*\{\s*([^}]+)\s*\}[^)]*$$/)
      if (destructuredMatch && !interfaceMatch) {
        const destructuredProps = destructuredMatch[1].split(",").map((p) => p.trim())
        destructuredProps.forEach((prop) => {
          const [name, defaultValue] = prop.split("=").map((p) => p.trim())
          if (name && !props.some((p) => p.name === name)) {
            props.push({
              name: name,
              type: defaultValue ? "string | undefined" : "any",
              optional: !!defaultValue,
              description: `${name} property${defaultValue ? ` (default: ${defaultValue})` : ""}`,
            })
          }
        })
      }

      return props
    }

    let instructions = `# ${componentName} Component\n\n`
    
    // Add usage instructions first
    instructions += `## 🚀 How to Use This Generated Component\n\n`
    instructions += `### Quick Start (3 Steps)\n`
    instructions += `1. **Download**: Click the "Download" button above to get the \`${componentName}.tsx\` file\n`
    instructions += `2. **Place**: Put the file in your project's \`components/\` folder\n`
    instructions += `3. **Import**: Use it in your React app:\n`
    instructions += `\`\`\`jsx\nimport ${componentName} from './components/${componentName}'\n\nfunction App() {\n  return (\n    <div>\n      <${componentName} />\n    </div>\n  )\n}\n\`\`\`\n\n`
    instructions += `### What You'll Need\n`
    instructions += `- ✅ React 18+ project (Next.js, Vite, Create React App)\n`
    instructions += `- ✅ Tailwind CSS configured\n`
    instructions += `- ✅ Origin UI components\n\n`
    
    // Check for documentation results and perform AI-powered contextual analysis
    let docInfo = ""
    let contextualAnalysis = null
    let apiEndpointsDetails: Array<{domain: string, endpoints: string[], analysis: any}> = []
    
    // Use provided documentation context if available, otherwise fetch fresh
    if (docContext && docContext.scrapedData) {
      // Use provided documentation context
      contextualAnalysis = docContext.analysis
      console.log('📚 Using provided documentation context for instructions')
      
      const results = docContext.scrapedData.results?.filter((r: any) => r.success) || []
      
      if (results.length > 0) {
        docInfo = `\n## 📚 API Documentation Analysis\n\n`
        docInfo += `**URLs Analyzed:** ${results.length} documentation sources\n\n`
        
        results.forEach((result: any, index: number) => {
          const domain = new URL(result.url).hostname
          docInfo += `### ${index + 1}. ${result.title || domain}\n`
          docInfo += `**URL:** [${result.url}](${result.url})\n`
          docInfo += `**Content:** ${result.wordCount || 0} words of documentation analyzed\n`
          
          if (result.apiEndpoints && result.apiEndpoints.length > 0) {
            // Enhanced endpoint filtering for API documentation
            const realEndpoints = result.apiEndpoints.filter((endpoint: string) => {
              // Skip obvious static assets
              if (endpoint.match(/\.(woff2?|ttf|eot|css|js|png|jpg|jpeg|gif|svg|ico)(\?|$)/i)) return false
              if (endpoint.includes('font') || endpoint.includes('static')) return false
              
              // Accept endpoints that look like API routes
              const lowerEndpoint = endpoint.toLowerCase()
              return (
                // Common API patterns
                lowerEndpoint.includes('/api/') ||
                lowerEndpoint.includes('/webhook') ||
                lowerEndpoint.includes('endpoint') ||
                lowerEndpoint.startsWith('http') ||
                // HTTP method patterns (like "post /checkouts", "get /payments")
                lowerEndpoint.match(/^(get|post|put|delete|patch)\s+\//) ||
                // Path patterns that look like API endpoints
                lowerEndpoint.match(/^\/[a-z-_]+/) ||
                // Any path with parameters
                lowerEndpoint.includes('{') || lowerEndpoint.includes(':id') || lowerEndpoint.includes('/:')
              )
            })
            
            if (realEndpoints.length > 0) {
              docInfo += `**API Endpoints Found:** ${realEndpoints.length} real endpoints\n`
              docInfo += `\`\`\`\n${realEndpoints.slice(0, 8).join('\n')}\n\`\`\`\n`
              apiEndpointsDetails.push({
                domain: domain,
                endpoints: realEndpoints,
                analysis: result.analysis
              })
            } else {
              docInfo += `**Documentation Type:** General API documentation without specific endpoint URLs\n`
            }
          } else {
            docInfo += `**Documentation Type:** General documentation without API endpoints\n`
          }
          docInfo += `\n`
        })
      }
    } else {
      // Fallback to existing documentation fetch logic (for backward compatibility)
      try {
        const docResponse = await fetch('/api/documentation')
        const docData = await docResponse.json()
        if (docData.hasDocumentation && docData.results) {
          setDocumentationResults(docData.results)
          
          // Get the user's original request to provide contextual analysis
          const requestToAnalyze = userRequest || currentUserRequest || (messages.length > 0 ? messages[messages.length - 1]?.content || '' : '')
          
          // Use AI to analyze documentation in context of user's request
          if (requestToAnalyze && hasFetch) {
            contextualAnalysis = await analyzeDocumentationContext(docData.results, requestToAnalyze)
          }
        
        const results = docData.results.results?.filter((r: any) => r.success) || []

        if (results.length > 0) {
          docInfo = `\n## 📚 API Documentation Analysis\n\n`
          docInfo += `**URLs Analyzed:** ${results.length} documentation sources\n\n`

          results.forEach((result: any, index: number) => {
            const domain = new URL(result.url).hostname
            docInfo += `### ${index + 1}. ${result.title || domain}\n`
            docInfo += `**URL:** [${result.url}](${result.url})\n`
            docInfo += `**Content:** ${result.wordCount || 0} words of documentation analyzed\n`

            if (result.apiEndpoints && result.apiEndpoints.length > 0) {
              // Enhanced endpoint filtering for API documentation
              const realEndpoints = result.apiEndpoints.filter((endpoint: string) => {
                // Skip obvious static assets
                if (endpoint.match(/\.(woff2?|ttf|eot|css|js|png|jpg|jpeg|gif|svg|ico)(\?|$)/i)) return false
                if (endpoint.includes("font") || endpoint.includes("static")) return false

                // Accept endpoints that look like API routes
                const lowerEndpoint = endpoint.toLowerCase()
                return (
                  // Common API patterns
                  lowerEndpoint.includes("/api/") ||
                  lowerEndpoint.includes("/webhook") ||
                  lowerEndpoint.includes("endpoint") ||
                  lowerEndpoint.startsWith("http") ||
                  // HTTP method patterns (like "post /checkouts", "get /payments")
                  lowerEndpoint.match(/^(get|post|put|delete|patch)\s+\//) ||
                  // Path patterns that look like API endpoints
                  lowerEndpoint.match(/^\/[a-z-_]+/) ||
                  // Any path with parameters
                  lowerEndpoint.includes("{") ||
                  lowerEndpoint.includes(":id") ||
                  lowerEndpoint.includes("/:")
                )
              })

              if (realEndpoints.length > 0) {
                docInfo += `**API Endpoints Found:** ${realEndpoints.length} real endpoints\n`
                docInfo += `\`\`\`\n${realEndpoints.slice(0, 8).join("\n")}\n\`\`\`\n`
                apiEndpointsDetails.push({
                  domain: domain,
                  endpoints: realEndpoints,
                  analysis: result.analysis,
                })
              } else {
                docInfo += `**Documentation Type:** General API documentation without specific endpoint URLs\n`
              }
            } else {
              docInfo += `**Documentation Type:** Conceptual API documentation\n`
            }

            if (result.analysis) {
              if (result.analysis.authMethods && result.analysis.authMethods.length > 0) {
                docInfo += `**🔐 Authentication:** ${result.analysis.authMethods.join(", ")}\n`
              }
              if (result.analysis.commonPatterns && result.analysis.commonPatterns.length > 0) {
                docInfo += `**📋 Integration Patterns:** ${result.analysis.commonPatterns.join(", ")}\n`
              }
              if (result.analysis.integrationNotes) {
                docInfo += `**💡 Integration Notes:** ${result.analysis.integrationNotes}\n`
              }
            }
            docInfo += `\n`
          })
        }
        }
      } catch (error) {
        console.error('Failed to fetch documentation:', error)
      }
    }

    instructions += `## Overview\n`
    if (hasFetch && hasAPI) {
      instructions += `A React functional component with **API integration** built using Origin UI design patterns and Tailwind CSS. This component includes real API calls and data handling with comprehensive error management.\n\n`
    } else {
      instructions += `A React functional component built with Origin UI design patterns and Tailwind CSS.\n\n`
    }

    // Use AI-generated contextual analysis if available, otherwise show basic docs
    if (contextualAnalysis && hasFetch) {
      instructions += `## 🤖 AI-Powered Integration Guide\n\n`
      instructions += `Based on your request and the scraped API documentation, here's a focused integration guide:\n\n`
      instructions += contextualAnalysis
      instructions += `\n\n`
    } else if (docInfo) {
      instructions += docInfo
    }

    instructions += `## Usage\n\`\`\`jsx\nimport ${componentName} from './${componentName}'\n\nfunction App() {\n  return <${componentName} />\n}\n\`\`\`\n\n`

    instructions += `## Features\n`

    if (hasFetch) {
      instructions += `- 🌐 **API Integration**: Makes HTTP requests to external APIs\n`
    }
    if (hasAPI) {
      instructions += `- 🔗 **Live Data**: Connects to real API endpoints for dynamic content\n`
    }
    instructions += hasState
      ? `- ✅ **Interactive State Management**: Uses React useState hooks\n`
      : `- 📋 **Static Component**: No internal state management\n`
    instructions += hasInteractivity
      ? `- ✅ **User Interactions**: Includes click handlers and form interactions\n`
      : `- 📋 **Display Only**: No user interactions\n`
    instructions += hasProps
      ? `- ✅ **Configurable Props**: Accepts customizable properties\n`
      : `- 📋 **Self Contained**: No external props required\n`
    instructions += `- 🎨 **Origin UI Styled**: Uses beautiful Origin UI design tokens\n`
    instructions += `- 📱 **Responsive Design**: Mobile-friendly responsive layout\n`
    instructions += `- 🌙 **Theme Support**: Compatible with dark/light modes\n`

    if (code.includes("loading") || code.includes("isLoading")) {
      instructions += `- ⏳ **Loading States**: Proper loading indicators during API calls\n`
    }
    if (code.includes("error") || code.includes("Error")) {
      instructions += `- ❌ **Error Handling**: Graceful error handling and user feedback\n`
    }
    if (code.includes("interface") || code.includes("type ")) {
      instructions += `- 📝 **TypeScript Support**: Includes proper type definitions\n`
    }

    // Extract and document component props for user guidance
    const componentProps = extractComponentProps(code)
    if (componentProps.length > 0) {
      instructions += `## 📝 Component Props Documentation\n\n`
      instructions += `This component accepts the following props for customization:\n\n`
      instructions += `| Prop Name | Type | Required | Description |\n`
      instructions += `|-----------|------|----------|-------------|\n`
      componentProps.forEach((prop) => {
        instructions += `| \`${prop.name}\` | \`${prop.type}\` | ${prop.optional ? "No" : "Yes"} | ${prop.description} |\n`
      })
      instructions += `\n### Props Usage Examples\n\n`
      instructions += `\`\`\`jsx\n// Basic usage without props\n<${componentName} />\n\n`
      if (componentProps.length > 0) {
        instructions += `// Advanced usage with props\n<${componentName}\n`
        componentProps.slice(0, 3).forEach(prop => {
          const sampleValue = prop.type.includes('string') ? `"sample value"` : 
                             prop.type.includes('number') ? `{123}` :
                             prop.type.includes('boolean') ? `{true}` : `{{}}`
          instructions += `  ${prop.name}=${sampleValue}\n`
        })
        instructions += `/>\n`
      }
      instructions += `\`\`\`\n\n`
    }

    instructions += `## Basic Usage\n\`\`\`jsx\nimport ${componentName} from './${componentName}'\n\nfunction App() {\n  return (\n    <div className="p-4">\n      <${componentName}${componentProps.length > 0 ? " />" : " />"}\n    </div>\n  )\n}\n\`\`\`\n\n`

    instructions += `\n## 🛠️ Installation & Setup\n`
    instructions += `### Step 1: Component Installation\n`
    instructions += `1. Copy the component code to your project (recommended: \`components/${componentName}.tsx\`)\n`
    instructions += `2. Ensure you have the required dependencies installed\n\n`

    instructions += `### Step 2: Dependencies\n`
    instructions += `Make sure these packages are installed:\n`
    instructions += `\`\`\`bash\nnpm install react react-dom\nnpm install -D tailwindcss @types/react @types/react-dom\n\`\`\`\n\n`

    instructions += `### Step 3: Tailwind CSS Configuration\n`
    instructions += `Ensure Tailwind CSS is configured with Origin UI colors in your \`tailwind.config.js\`:\n`
    instructions += `\`\`\`javascript\nmodule.exports = {\n  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],\n  theme: {\n    extend: {\n      colors: {\n        // Origin UI color tokens (required for proper styling)\n        border: "hsl(var(--border))",\n        background: "hsl(var(--background))",\n        foreground: "hsl(var(--foreground))",\n        primary: {\n          DEFAULT: "hsl(var(--primary))",\n          foreground: "hsl(var(--primary-foreground))",\n        },\n        // ... other Origin UI colors\n      }\n    }\n  },\n  plugins: [],\n}\n\`\`\`\n\n`
    if (hasFetch) {
      instructions += `### Step 4: API Integration Setup\n`
      instructions += `For components with API integration, additional setup is required:\n\n`
      instructions += `**Environment Variables (\`.env.local\`):**\n`
      instructions += `\`\`\`bash\n# Add your API credentials\nNEXT_PUBLIC_API_KEY=your_api_key_here\nAPI_SECRET=your_secret_key\nAPI_BASE_URL=https://api.example.com\n\`\`\`\n\n`
      instructions += `**CORS Configuration:**\n`
      instructions += `If calling external APIs from the browser, ensure CORS is properly configured on the API server.\n\n`
    } else {
      instructions += `### Step 4: Import and Use\n`
      instructions += `Import and use the component in your React application.\n\n`
    }

    // Enhanced API Integration Guide - only show detailed version if no AI analysis
    if (apiEndpointsDetails.length > 0 && !contextualAnalysis) {
      instructions += `## 🌐 Comprehensive API Integration Guide\n\n`
      instructions += `This component integrates with **${apiEndpointsDetails.length} API source(s)**. Here's your complete, beginner-friendly guide:\n\n`

      apiEndpointsDetails.forEach((apiDetail, index) => {
        instructions += `### ${index + 1}. ${apiDetail.domain} API Integration\n\n`

        if (apiDetail.analysis?.authMethods && apiDetail.analysis.authMethods.length > 0) {
          instructions += `**🔐 Authentication Required:** ${apiDetail.analysis.authMethods.join(", ")}\n\n`

          // Provide specific auth examples
          if (
            apiDetail.analysis.authMethods.includes("Bearer Token") ||
            apiDetail.analysis.authMethods.includes("API Key")
          ) {
            instructions += `**Authentication Setup Examples:**\n`
            instructions += `\`\`\`javascript\n// Method 1: Using Authorization header\nconst headers = {\n  'Authorization': 'Bearer YOUR_TOKEN_HERE',\n  'Content-Type': 'application/json'\n}\n\n// Method 2: Using API key in header\nconst headers = {\n  'X-API-Key': 'YOUR_API_KEY_HERE',\n  'Content-Type': 'application/json'\n}\n\n// Usage in fetch\nconst response = await fetch('https://${apiDetail.domain}/api/endpoint', {\n  method: 'GET',\n  headers: headers\n})\n\`\`\`\n\n`
          }
        }

        if (apiDetail.endpoints.length > 0) {
          instructions += `**🔗 Available API Endpoints (${apiDetail.endpoints.length} found):**\n\n`

          apiDetail.endpoints.slice(0, 5).forEach((endpoint: string, idx: number) => {
            // Determine HTTP method from endpoint string
            const method = endpoint.includes("GET")
              ? "GET"
              : endpoint.includes("POST")
                ? "POST"
                : endpoint.includes("PUT")
                  ? "PUT"
                  : endpoint.includes("DELETE")
                    ? "DELETE"
                    : "GET"

            const cleanEndpoint = endpoint.replace(/(GET|POST|PUT|DELETE)\s+/i, "").trim()
            const fullUrl = cleanEndpoint.startsWith("http")
              ? cleanEndpoint
              : `https://${apiDetail.domain}${cleanEndpoint}`

            instructions += `#### Endpoint ${idx + 1}: ${method} ${cleanEndpoint}\n\n`
            instructions += `**Quick Copy-Paste Example:**\n`
            instructions += `\`\`\`javascript\n// ${method} ${cleanEndpoint}\nconst ${method.toLowerCase()}Data = async () => {\n  try {\n    const response = await fetch('${fullUrl}', {\n      method: '${method}',\n      headers: {\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY,\n        // Add other required headers here\n      }${method === "POST" || method === "PUT" ? ',\n      body: JSON.stringify({\n        // Add your request payload here\n        // Example: { name: "value", id: 123 }\n      })' : ""}\n    })\n    \n    if (!response.ok) {\n      throw new Error(\`HTTP error! status: \${response.status}\`)\n    }\n    \n    const data = await response.json()\n    return data\n  } catch (error) {\n    console.error('API Error:', error)\n    throw error\n  }\n}\n\`\`\`\n\n`

            // Add React hook usage example
            instructions += `**React Hook Integration:**\n`
            instructions += `\`\`\`jsx\nimport { Response } from 'react'\n\nconst MyComponent = () => {\n  const [data, setData] = useState(null)\n  const [loading, setLoading] = useState(false)\n  const [error, setError] = useState(null)\n\n  const fetchData = async () => {\n    setLoading(true)\n    setError(null)\n    try {\n      const result = await ${method.toLowerCase()}Data()\n      setData(result)\n    } catch (err) {\n      setError(err.message)\n    } finally {\n      setLoading(false)\n    }\n  }\n\n  useEffect(() => {\n    fetchData() // Fetch on component mount\n  }, [])\n\n  if (loading) return <div>Loading...</div>\n  if (error) return <div>Error: {error}</div>\n  if (!data) return <div>No data</div>\n\n  return (\n    <div>\n      {/* Render your data here */}\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n    </div>\n  )\n}\n\`\`\`\n\n`
          })
        }

        if (apiDetail.analysis?.commonPatterns && apiDetail.analysis.commonPatterns.length > 0) {
          instructions += `**📋 Integration Patterns Found:** ${apiDetail.analysis.commonPatterns.join(", ")}\n\n`
        }

        if (apiDetail.analysis?.rateLimit) {
          instructions += `**⚡ Rate Limits:** ${apiDetail.analysis.rateLimit}\n\n`
          instructions += `**Rate Limiting Best Practice:**\n`
          instructions += `\`\`\`javascript\n// Simple rate limiting with delays\nconst delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))\n\nconst rateLimitedFetch = async (url, options) => {\n  await delay(100) // 100ms delay between requests\n  return fetch(url, options)\n}\n\`\`\`\n\n`
        }

        if (apiDetail.analysis?.integrationNotes) {
          instructions += `**💡 Integration Notes:** ${apiDetail.analysis.integrationNotes}\n\n`
        }

        instructions += `---\n\n`
      })

      instructions += `### 🚀 Quick Start Checklist for API Integration\n\n`
      instructions += `Follow this step-by-step checklist to get your API integration working:\n\n`
      instructions += `- [ ] **Step 1:** Sign up for API access at the provider's website\n`
      instructions += `- [ ] **Step 2:** Generate API keys/tokens from your dashboard\n`
      instructions += `- [ ] **Step 3:** Add API credentials to your \`.env.local\` file\n`
      instructions += `- [ ] **Step 4:** Install any required packages (\`npm install\`)\n`
      instructions += `- [ ] **Step 5:** Test endpoints in development environment\n`
      instructions += `- [ ] **Step 6:** Configure CORS settings (if calling from browser)\n`
      instructions += `- [ ] **Step 7:** Implement proper error handling\n`
      instructions += `- [ ] **Step 8:** Add loading states for better UX\n`
      instructions += `- [ ] **Step 9:** Test in production environment\n\n`

      instructions += `### 🔧 Development vs Production Configuration\n\n`
      instructions += `**Development Environment:**\n`
      instructions += `\`\`\`javascript\n// .env.local (for development)\nNEXT_PUBLIC_API_BASE_URL=https://dev-api.${apiEndpointsDetails[0]?.domain || "example.com"}\nNEXT_PUBLIC_API_KEY=dev_key_here\n\n// In your component\nconst API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL\nconst API_KEY = process.env.NEXT_PUBLIC_API_KEY\n\`\`\`\n\n`
      instructions += `**Production Environment:**\n`
      instructions += `\`\`\`javascript\n// .env.production (for production)\nNEXT_PUBLIC_API_BASE_URL=https://api.${apiEndpointsDetails[0]?.domain || "example.com"}\nNEXT_PUBLIC_API_KEY=prod_key_here\n\n// Same component code works in both environments!\n\`\`\`\n\n`
    } else if (hasFetch && !contextualAnalysis) {
      instructions += `## 🔗 API Integration Guide\n\n`
      instructions += `This component includes API integration capabilities. Here's what you need to know:\n\n`
      instructions += `### Basic Setup Requirements\n`
      instructions += `1. **Endpoint Access:** Ensure API endpoints are accessible from your domain\n`
      instructions += `2. **CORS Configuration:** Configure proper CORS settings for external APIs\n`
      instructions += `3. **Authentication:** Add authentication headers if required\n`
      instructions += `4. **Error Handling:** Implement retry strategies and proper error handling\n\n`

      instructions += `### Basic API Integration Example\n`
      instructions += `\`\`\`javascript\n// Complete API integration example\nconst [data, setData] = useState(null)\nconst [loading, setLoading] = useState(false)\nconst [error, setError] = useState(null)\n\nconst fetchData = async () => {\n  setLoading(true)\n  setError(null)\n  \n  try {\n    const response = await fetch('/api/your-endpoint', {\n      method: 'GET',\n      headers: {\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY\n      }\n    })\n    \n    if (!response.ok) {\n      throw new Error(\`HTTP error! status: \${response.status}\`)\n    }\n    \n    const result = await response.json()\n    setData(result)\n  } catch (error) {\n    console.error('Fetch error:', error)\n    setError(error.message)\n  } finally {\n    setLoading(false)\n  }\n}\n\n// Use in component\nuseEffect(() => {\n  fetchData()\n}, [])\n\`\`\`\n\n`

      instructions += `### Environment Variables Setup\n`
      instructions += `\`\`\`bash\n# .env.local\nNEXT_PUBLIC_API_URL=https://api.example.com\nNEXT_PUBLIC_API_KEY=your_api_key_here\n\`\`\`\n\n`
    }

    instructions += `## 🎯 Customization Guide\n\n`
    instructions += `### Styling Customization\n`
    instructions += `The component uses Tailwind CSS classes. Here's how to customize:\n\n`
    instructions += `\`\`\`jsx\n// Change colors (example modifications)\n<div className="bg-blue-500 text-white"> // Instead of default bg-background\n<div className="border-red-500"> // Instead of default border\n<div className="text-green-600"> // Instead of default text color\n\n// Modify spacing\n<div className="p-8 m-4"> // Instead of default padding/margin\n<div className="space-y-6"> // Increase/decrease spacing between elements\n\n// Adjust borders and shadows\n<div className="border-2 shadow-lg rounded-xl"> // Custom borders and shadows\n<div className="ring-2 ring-blue-500"> // Add focus rings\n\`\`\`\n\n`

    if (componentProps.length > 0) {
      instructions += `### Props Customization\n`
      instructions += `Use component props to customize behavior and appearance:\n\n`
      instructions += `\`\`\`jsx\n<${componentName}\n`
      componentProps.forEach((prop: { name: string; type: string; optional: boolean; description: string }) => {
        const sampleValue = prop.type.includes("string")
          ? `"your custom value"`
          : prop.type.includes("number")
            ? `{42}`
            : prop.type.includes("boolean")
              ? `{true}`
              : `{{}}`
        instructions += `  ${prop.name}=${sampleValue}  // ${prop.description}\n`
      })
      instructions += `/>\n\`\`\`\n\n`
    }

    instructions += `### Advanced Customization\n`
    instructions += `\`\`\`jsx\n// Override component styles with custom CSS classes\n<${componentName} className="your-custom-class" />\n\n// Add custom CSS variables for dynamic theming\n<div style={{\n  '--custom-primary': '#your-color',\n  '--custom-radius': '8px'\n}}>\n  <${componentName} />\n</div>\n\`\`\`\n\n`

    instructions += `## 🐛 Troubleshooting Guide\n\n`
    instructions += `### Common Issues & Solutions\n\n`
    instructions += `**1. 🎨 Styling not appearing correctly:**\n`
    instructions += `- ✅ Ensure Tailwind CSS is properly installed and configured\n`
    instructions += `- ✅ Check that your build process includes the component files\n`
    instructions += `- ✅ Verify Origin UI colors are defined in your \`tailwind.config.js\`\n`
    instructions += `- ✅ Make sure CSS is being loaded in your app\n\n`

    if (hasFetch) {
      instructions += `**2. 🌐 API calls failing:**\n`
      instructions += `- ✅ Verify API endpoint URLs are correct and accessible\n`
      instructions += `- ✅ Check authentication tokens/headers are properly set\n`
      instructions += `- ✅ Ensure CORS is properly configured on the API server\n`
      instructions += `- ✅ Check network requests in browser DevTools (Network tab)\n`
      instructions += `- ✅ Verify environment variables are loaded correctly\n\n`

      instructions += `**3. 🚫 CORS errors in browser:**\n`
      instructions += `- ✅ Add proper CORS headers on your API server\n`
      instructions += `- ✅ Use a proxy during development (e.g., Next.js API routes)\n`
      instructions += `- ✅ Consider using server-side rendering for API calls\n`
      instructions += `- ✅ Check if API supports JSONP as an alternative\n\n`

      instructions += `**4. 🔑 Authentication issues:**\n`
      instructions += `- ✅ Verify API keys are correctly added to environment variables\n`
      instructions += `- ✅ Check token expiration and refresh mechanisms\n`
      instructions += `- ✅ Ensure proper header format (Bearer, API-Key, etc.)\n`
      instructions += `- ✅ Test authentication with API documentation examples\n\n`
    }

    if (hasProps) {
      instructions += `**${hasFetch ? "5" : "2"}. ⚙️ Props not working:**\n`
      instructions += `- ✅ Check prop names match exactly (JavaScript is case-sensitive)\n`
      instructions += `- ✅ Verify prop types match component expectations\n`
      instructions += `- ✅ Ensure required props are provided\n`
      instructions += `- ✅ Check for typos in prop names\n\n`
    }

    instructions += `**${hasFetch ? (hasProps ? "6" : "5") : hasProps ? "3" : "2"}. 📱 Component not rendering:**\n`
    instructions += `- ✅ Check browser console for JavaScript errors\n`
    instructions += `- ✅ Verify all required imports are present\n`
    instructions += `- ✅ Ensure React and ReactDOM are properly installed\n`
    instructions += `- ✅ Check if component is properly exported/imported\n\n`

    instructions += `### Debug Tools & Tips\n\n`
    instructions += `**Console Debugging:**\n`
    instructions += `\`\`\`javascript\n// Add these debug lines to your component\nconsole.log('Component props:', props)\nconsole.log('Component state:', { loading, error, data })\n\n// For API debugging\nfetch('/api/endpoint')\n  .then(res => {\n    console.log('Response status:', res.status)\n    console.log('Response headers:', res.headers)\n    return res.json()\n  })\n  .then(data => console.log('Response data:', data))\n  .catch(err => console.error('API Error:', err))\n\`\`\`\n\n`

    instructions += `**Browser DevTools Tips:**\n`
    instructions += `1. 🔍 **Network Tab**: Check API requests and responses\n`
    instructions += `2. 🎯 **Console Tab**: Look for JavaScript errors and debug logs\n`
    instructions += `3. 🎨 **Elements Tab**: Inspect CSS styles and HTML structure\n`
    instructions += `4. ⚛️ **React DevTools**: Inspect component props and state (if installed)\n\n`

    instructions += `**Environment Variable Debugging:**\n`
    instructions += `\`\`\`javascript\n// Check if environment variables are loaded\nconsole.log('API Key:', process.env.NEXT_PUBLIC_API_KEY ? 'Loaded' : 'Missing')\nconsole.log('API URL:', process.env.NEXT_PUBLIC_API_URL)\n\n// In Next.js, only NEXT_PUBLIC_ variables work in browser\n// Server-side variables work in API routes and server components\n\`\`\`\n\n`

    instructions += `## 📚 Additional Resources\n\n`
    instructions += `### Documentation & Learning\n`
    instructions += `- 🎨 [Origin UI Documentation](https://originui.com/docs) - Component library docs\n`
    instructions += `- 🎯 [Tailwind CSS Documentation](https://tailwindcss.com/docs) - CSS framework reference\n`
    instructions += `- ⚛️ [React Documentation](https://react.dev) - React framework guide\n`
    if (hasFetch) {
      instructions += `- 🌐 [Fetch API Reference](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - Web API docs\n`
      instructions += `- 🔧 [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - Server-side API handling\n`
    }
    if (hasState) {
      instructions += `- 🪝 [React Hooks](https://react.dev/reference/react) - useState, useEffect, and more\n`
    }
    instructions += `\n### Community & Support\n`
    instructions += `- 💬 [Origin UI Discord](https://discord.gg/originui) - Community support\n`
    instructions += `- 🐛 [Report Issues](https://github.com/originui/ui/issues) - Bug reports and feature requests\n`
    instructions += `- 📖 [Tailwind CSS Community](https://github.com/tailwindcss/tailwindcss/discussions) - CSS questions\n`

    instructions += `\n---\n\n`
    instructions += `## 🎉 Success! You're All Set\n\n`
    instructions += `You now have everything needed to use this component:\n`
    instructions += `- ✅ Complete component code\n`
    instructions += `- ✅ Detailed installation instructions\n`
    if (componentProps.length > 0) {
      instructions += `- ✅ Props documentation with examples\n`
    }
    if (apiEndpointsDetails.length > 0) {
      instructions += `- ✅ API integration guide with working examples\n`
    }
    instructions += `- ✅ Customization options and styling guide\n`
    instructions += `- ✅ Troubleshooting guide and debug tools\n`
    instructions += `- ✅ Additional resources for continued learning\n\n`

    instructions += `*🤖 Generated by AI Component Generator with ${apiEndpointsDetails.length > 0 ? "API Documentation Intelligence" : "Origin UI"} • ${new Date().toLocaleDateString()} • Ready for production use*`

    setInstructions(instructions)
  }

  // Regenerate instructions when code or user request changes
  useEffect(() => {
    if (generatedCode) {
      generateInstructions(generatedCode)
    }
  }, [generatedCode, currentUserRequest])

  // Download component as file
  const downloadComponent = () => {
    const componentName = extractComponentName(generatedCode)
    const filename = `${componentName.replace(/[^a-zA-Z0-9]/g, "")}.tsx`

    const fileContent = `// ${componentName} Component
// Generated by AI Component Generator
// Built with Origin UI and Tailwind CSS

import React from 'react'

${generatedCode.replace(/window\.default\s*=\s*\w+;?\s*$/g, "").trim()}

export default ${componentName}
`

    const blob = new Blob([fileContent], { type: "text/typescript" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    // Show success feedback
    setDownloadSuccess(true)
    setTimeout(() => setDownloadSuccess(false), 2000)
  }

  // Retry last message
  const retryLastMessage = async () => {
    if (messages.length === 0 || isLoading) return

    // Find the last user message
    const lastUserMessage = [...messages].reverse().find(msg => msg.role === 'user')
    if (!lastUserMessage) return

    setIsLoading(true)
    setError(null)

    // Remove any existing assistant messages to start fresh
    const userMessagesOnly = messages.filter(msg => msg.role === 'user')

    // Add a generating status message
    const statusMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: "⟳ Retrying your request...",
      timestamp: new Date(),
    }
    setMessages((prev) => [...userMessagesOnly, statusMessage])

    try {
      // Generate component with the last user message
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: userMessagesOnly,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error("No response body")

      // Read the entire stream as component code
      const decoder = new TextDecoder()
      let fullCode = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        fullCode += chunk
      }

      // Clean up the code and set it directly
      let cleanCode = fullCode.trim()

      // Remove any markdown code blocks if present
      cleanCode = cleanCode.replace(/```(?:jsx?|tsx?|javascript|typescript)?\n?/g, "")
      cleanCode = cleanCode.replace(/```/g, "")

      // Add window.default export if not present
      if (!cleanCode.includes("window.default")) {
        // Try to detect component name
        const functionMatch = cleanCode.match(/function\s+(\w+)/)
        const componentName = functionMatch ? functionMatch[1] : "Component"
        cleanCode += `\n\n// Export as default for the preview\nwindow.default = ${componentName};`
      }

      // Set the generated code directly to preview
      setGeneratedCode(cleanCode)

      // Step 3: Generate contextual instructions
      await generateInstructions(cleanCode, lastUserMessage.content.trim(), null)

      // Update status message to success
      const successMessage: Message = {
        id: statusMessage.id,
        role: "assistant",
        content: "<CheckCircle className=\"w-4 h-4 inline mr-1\" /> Component generated successfully! Check the preview →",
        timestamp: new Date(),
      }

      setMessages((prev) => prev.map((msg) => (msg.id === statusMessage.id ? successMessage : msg)))

      // Auto-switch to preview tab
      setSelectedTab("preview")
    } catch (err) {
      console.error("Error:", err)
      setError({ message: err instanceof Error ? err.message : "An error occurred", type: 'unknown' })

      // Update status message to error
      const errorMessage: Message = {
        id: statusMessage.id,
        role: "assistant",
        content: "❌ Error generating component. Please try again.",
        timestamp: new Date(),
      }

      setMessages((prev) => prev.map((msg) => (msg.id === statusMessage.id ? errorMessage : msg)))
    } finally {
      setIsLoading(false)
    }
  }

  // Clear conversation
  const clearConversation = () => {
    setMessages([])
    setGeneratedCode(`function WelcomeHero() {
    return (
      <div className="w-full max-w-4xl mx-auto py-16 px-6 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Welcome to <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">cypher</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Transform your ideas into production-ready React components with AI. Just describe what you need, and we'll generate clean, type-safe code instantly.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#get-started"
              className="rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors duration-200"
            >
              Get started
            </a>
            <a href="#how-it-works" className="text-sm font-semibold leading-6 text-foreground hover:text-orange-500 transition-colors duration-200">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mt-16 flow-root sm:mt-24">
          <div className="-m-2 rounded-xl bg-card/50 p-2 ring-1 ring-border/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="rounded-md bg-background p-8 shadow-2xl ring-1 ring-border/10">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-orange-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                  <div className="flex-1 text-center text-sm font-medium text-muted-foreground">
                    Preview
                  </div>
                </div>
                <div className="text-center py-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Export as default for the preview
  window.default = WelcomeHero;`)
    setSelectedTab("preview")
    setInstructions("")
    setError(null)
  }
  const copyComponent = async () => {
    try {
      const componentName = extractComponentName(generatedCode)

      const fileContent = `// ${componentName} Component
// Generated by AI Component Generator
// Built with Origin UI and Tailwind CSS

import React from 'react'

${generatedCode.replace(/window\.default\s*=\s*\w+;?\s*$/g, "").trim()}

export default ${componentName}
`

      await navigator.clipboard.writeText(fileContent)
      toast.success("Code copied to clipboard!")
    } catch (err) {
      console.error('Failed to copy code:', err)
      toast.error("Failed to copy code to clipboard")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setIsLoading(true)
    setError(null)

    // Store the current user request for contextual analysis
    setCurrentUserRequest(input.trim())

    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])
    setInput("")

    // Check for URLs in the message for status display
    const urlRegex = /(https?:\/\/[^\s]+)/gi
    const urls = input.match(urlRegex) || []
    
    // Add a generating status message with URL detection info
    const statusMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: urls.length > 0
        ? `🌐 Detected ${urls.length} URL(s) - Analyzing API documentation...\n📚 Scraping: ${urls.join(', ')}\n⚡ Generating your component with API integration...`
        : "⚡ Generating your component...",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, statusMessage])

    try {
      // Generate component - the chat API handles URL processing internally
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages.map(m => ({ 
            role: m.role, 
            content: m.content 
          })), { role: 'user', content: input }] 
        })
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let responseText = ''
      let tokenUsageData: any = null

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          
          const chunk = decoder.decode(value, { stream: true })
          
          try {
            // Try to parse as JSON (token usage data)
            const parsed = JSON.parse(chunk)
            if (parsed.usage) {
              tokenUsageData = parsed.usage
            }
          } catch (e) {
            // If not JSON, it's the regular text response
            responseText += chunk
          }
        }
      }

      // Update token usage if we received it
      if (tokenUsageData) {
        setTokenUsage(prev => ({
          ...prev,
          inputTokens: prev.inputTokens + (tokenUsageData.inputTokens || 0),
          outputTokens: prev.outputTokens + (tokenUsageData.outputTokens || 0),
          reasoningTokens: prev.reasoningTokens + (tokenUsageData.reasoningTokens || 0),
          cachedInputTokens: prev.cachedInputTokens + (tokenUsageData.cachedInputTokens || 0)
        }))
      }

      const data = { message: responseText }

      // Clean up the code and set it directly
      let cleanCode = data.message.trim()

      // Remove any markdown code blocks if present
      cleanCode = cleanCode.replace(/```(?:jsx?|tsx?|javascript|typescript)?\n?/g, "")
      cleanCode = cleanCode.replace(/```/g, "")

      // Add window.default export if not present
      if (!cleanCode.includes("window.default")) {
        // Try to detect component name
        const functionMatch = cleanCode.match(/function\s+(\w+)/)
        const componentName = functionMatch ? functionMatch[1] : "Component"
        cleanCode += `\n\n// Export as default for the preview\nwindow.default = ${componentName};`
      }

      // Set the generated code directly to preview
      setGeneratedCode(cleanCode)

      // Step 3: Generate contextual instructions
      await generateInstructions(cleanCode, input.trim(), null)

      // Check if documentation was analyzed and add results to success message
      let successContent = "<CheckCircle className=\"w-4 h-4 inline mr-1\" /> Component generated successfully! Check the preview →"
      
      if (urls.length > 0) {
        successContent += `\n\n<FileText className=\"w-4 h-4 inline mr-1\" /> **API Documentation Analyzed:**\n• Processed ${urls.length} documentation URL(s)\n• Enhanced with API integration context`
      }

      // Update status message to success
      const successMessage: Message = {
        id: statusMessage.id,
        role: "assistant",
        content: successContent,
        timestamp: new Date(),
      }

      setMessages((prev) => prev.map((msg) => (msg.id === statusMessage.id ? successMessage : msg)))

      // Auto-switch to preview tab
      setSelectedTab("preview")
    } catch (err) {
      console.error("Error:", err)
      setError({ message: err instanceof Error ? err.message : "An error occurred", type: 'unknown' })

      // Update status message to error
      const errorMessage: Message = {
        id: statusMessage.id,
        role: "assistant",
        content: "❌ Error generating component. Please try again.",
        timestamp: new Date(),
      }

      setMessages((prev) => prev.map((msg) => (msg.id === statusMessage.id ? errorMessage : msg)))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ResizableChatLayout
      leftPanel={<div className="flex flex-col bg-card rounded-2xl border border-border shadow-sm overflow-hidden h-full">
        {/* Chat Header */}
        <div className="p-6 border-b border-border bg-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="font-semibold text-lg text-foreground">AI Assistant</h1>
                <p className="text-sm text-muted-foreground">Powered by Gemini 2.5 Flash</p>
              </div>
            </div>

              {/* Help button */}
              <CypherInstructionsModal />
          </div>

          {/* Task status bar */}
          <div className="mt-4">
            <div className={`flex items-center gap-2 text-sm ${isLoading ? 'text-blue-600' : messages.length > 0 ? 'text-green-600' : 'text-muted-foreground'}`}>
              <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-blue-600 animate-pulse' : messages.length > 0 ? 'bg-green-600' : 'bg-muted-foreground'}`} />
              <span>
                {isLoading ? "Generating component..." : messages.length > 0 ? "Component generated successfully" : "Ready to generate component"}
              </span>
            </div>
          </div>
        </div>

        {/* Retry and Clear buttons - shown when in conversation */}
        {messages.length > 0 && !isLoading && (
          <div className="p-4 border-t border-border bg-card/50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Conversation in progress • {messages.filter(m => m.role === 'user').length} requests
              </div>
              <div className="flex items-center gap-2">
                <Button
                  onClick={retryLastMessage}
                  size="sm"
                  variant="outline"
                  className="gap-2"
                  disabled={isLoading}
                >
                  <RefreshCw className="w-4 h-4" />
                  Retry Last
                </Button>
                <Button
                  onClick={clearConversation}
                  size="sm"
                  variant="outline"
                  className="gap-2 text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear Chat
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Messages - Using AI Elements with enhanced functionality */}
        <div className="flex-1 min-h-0 p-6 overflow-y-auto">
          <div className="space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted/50 text-muted-foreground rounded-bl-md"}`}
                >
                  {message.role === "assistant" && message.content.includes("CheckCircle") ? (
                    <div className="text-sm leading-relaxed">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="font-medium">Component generated successfully!</span>
                      </div>
                      <p className="text-muted-foreground ml-6">Check the preview →</p>
                      {message.content.includes("FileText") && (
                        <>
                          <div className="flex items-center gap-2 mt-3 mb-1">
                            <FileText className="w-4 h-4 text-blue-600" />
                            <span className="font-medium">**API Documentation Analyzed:**</span>
                          </div>
                          <div className="ml-6 text-sm text-muted-foreground">
                            • Processed {message.content.match(/(\d+)/)?.[1] || 'multiple'} documentation URL(s)<br />
                            • Enhanced with API integration context
                          </div>
                        </>
                      )}
                    </div>
                  ) : message.role === "assistant" && message.content.includes("📚 **API Documentation Analyzed:**") ? (
                    <div className="text-sm leading-relaxed">
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                          strong: ({ children }) => (
                            <strong className="font-semibold text-foreground">{children}</strong>
                          ),
                          ul: ({ children }) => <ul className="ml-4 space-y-1">{children}</ul>,
                          li: ({ children }) => <li className="text-sm">{children}</li>,
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  ) : message.content.match(/!\[.*\]\(.*\)/) ? (
                    <div className="space-y-3">
                      <ReactMarkdown
                        components={{
                          img: ({ src, alt }) => (
                            <img
                              src={src}
                              alt={alt || 'Image'}
                              className="rounded-lg border shadow-sm max-w-full h-auto" />
                          ),
                          p: ({ children }) => <div className="my-2">{children}</div>,
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    </div>
                  )}
                  <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                </div>
              </div>
            ))}

            {/* Enhanced loading indicator with Chain of Thought */}
            {isLoading && (
              <div className="flex items-center gap-2 py-4">
                <Loader size={16} />
                <span className="text-sm text-muted-foreground">
                  AI is thinking...
                </span>
              </div>
            )}

            {/* Chain of Thought for loading state */}
            {isLoading && (
              <ChainOfThought defaultOpen={false}>
                <ChainOfThoughtHeader>
                  Thinking Process
                </ChainOfThoughtHeader>
                <ChainOfThoughtContent>
                  <ChainOfThoughtStep
                    label="Analyzing your request"
                    description="Understanding the component requirements"
                    status="active" />
                  <ChainOfThoughtStep
                    label="Planning component structure"
                    description="Designing the optimal component architecture"
                    status="pending" />
                  <ChainOfThoughtStep
                    label="Generating code"
                    description="Writing clean, production-ready React code"
                    status="pending" />
                  <ChainOfThoughtStep
                    label="Adding documentation"
                    description="Creating comprehensive usage instructions"
                    status="pending" />
                </ChainOfThoughtContent>
              </ChainOfThought>
            )}

          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="p-4 bg-destructive/10 border-t border-destructive/20">
            <p className="text-sm text-destructive">Error: {error.message}</p>
          </div>
        )}

        {/* Prompt Suggestions - Using AI Elements Suggestions Component */}
        {messages.length === 0 && (
          <div className="p-4 border-t border-border bg-card/50">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Try these examples:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <button
                onClick={() => setInput("A modern dashboard card with metrics, a chart, and quick actions")}
                className="p-3 text-left rounded-lg border border-border/30 hover:border-orange-400/50 hover:bg-orange-50/50 dark:hover:bg-orange-900/10 transition-colors text-sm"
              >
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-orange-400 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-foreground">Analytics Card</div>
                    <div className="text-xs text-muted-foreground">Metrics & charts</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setInput("A sleek product card with image, title, description, and add to cart button")}
                className="p-3 text-left rounded-lg border border-border/30 hover:border-orange-400/50 hover:bg-orange-50/50 dark:hover:bg-orange-900/10 transition-colors text-sm"
              >
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-orange-400 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-foreground">Product Card</div>
                    <div className="text-xs text-muted-foreground">E-commerce ready</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setInput("Make me a blog app that has a few blogs there for people to read. Users can click into the blogs and read them, then go back to the homepage to see more.")}
                className="p-3 text-left rounded-lg border border-border/30 hover:border-orange-400/50 hover:bg-orange-50/50 dark:hover:bg-orange-900/10 transition-colors text-sm"
              >
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-orange-400 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-foreground">Blog Application</div>
                    <div className="text-xs text-muted-foreground">Browse & read posts</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setInput("A task management app with drag-and-drop kanban board, add/edit/delete tasks, and different priority levels")}
                className="p-3 text-left rounded-lg border border-border/30 hover:border-orange-400/50 hover:bg-orange-50/50 dark:hover:bg-orange-900/10 transition-colors text-sm"
              >
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-orange-400 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-foreground">Task Manager</div>
                    <div className="text-xs text-muted-foreground">Kanban board</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setInput("A weather dashboard that shows current mock weather conditions, 5-day forecast, and temperature alerts")}
                className="p-3 text-left rounded-lg border border-border/30 hover:border-orange-400/50 hover:bg-orange-50/50 dark:hover:bg-orange-900/10 transition-colors text-sm"
              >
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-orange-400 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-foreground">Weather Dashboard</div>
                    <div className="text-xs text-muted-foreground">Current & forecast</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setInput("A social media feed component with posts, likes, comments, and tech related content in English")}
                className="p-3 text-left rounded-lg border border-border/30 hover:border-orange-400/50 hover:bg-orange-50/50 dark:hover:bg-orange-900/10 transition-colors text-sm"
              >
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-orange-400 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-foreground">Social Feed</div>
                    <div className="text-xs text-muted-foreground">Posts & interactions</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Input */}
        <div className="sticky bottom-0 p-6 border-t border-border bg-card z-10">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask cypher to build a component..."
              className="flex-1 rounded-xl border-border/50 bg-background/50 px-4 py-3 focus:ring-2 focus:ring-primary/20"
              disabled={isLoading} />
            <Button
              type="submit"
              disabled={isLoading || !input?.trim()}
              title={!input?.trim() ? "Type a message first" : "Send message"}
              className="rounded-xl px-6 py-3 shadow-sm"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>}
      rightPanel={<div className="flex flex-col bg-card rounded-2xl border border-border shadow-sm overflow-hidden h-full">
        {/* Preview Header */}
        <div className="p-6 border-b border-border bg-card">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-lg text-foreground">Component Preview</h2>
              <p className="text-sm text-muted-foreground">Preview | Code | Docs</p>
            </div>

            {/* Toolbar for preview actions */}
            <Toolbar>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSelectedTab("code")}
                className="gap-2"
              >
                <Code className="w-4 h-4" />
                View Code
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSelectedTab("instructions")}
                className="gap-2"
              >
                <FileText className="w-4 h-4" />
                Documentation
              </Button>
            </Toolbar>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="flex-1 flex flex-col overflow-hidden">
          <div className="px-6 pt-4 pb-0 flex-shrink-0">
            <TabsList className="grid w-full grid-cols-3 rounded-xl">
              <TabsTrigger value="preview" className="flex items-center gap-2 rounded-lg">
                <Eye className="w-4 h-4" />
                Preview
              </TabsTrigger>
              <TabsTrigger value="code" className="flex items-center gap-2 rounded-lg">
                <Code className="w-4 h-4" />
                Code
              </TabsTrigger>
              <TabsTrigger value="instructions" className="flex items-center gap-2 rounded-lg">
                <FileText className="w-4 h-4" />
                Instructions
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="preview" className="flex-1 p-3 overflow-hidden min-h-0">
            <div className="h-full w-full min-h-0">
              <SandboxedPreview code={generatedCode} />
            </div>
          </TabsContent>

          <TabsContent value="code" className="flex-1 p-6 pt-4 flex flex-col overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Component Code</h3>
              <div className="flex items-center gap-2">
                {downloadSuccess && <span className="text-sm text-green-600 dark:text-green-400">Downloaded!</span>}
                <Button
                  onClick={copyComponent}
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-2 bg-transparent rounded-lg"
                >
                  <Copy className="w-4 h-4" />
                  Copy
                </Button>
                <Button
                  onClick={downloadComponent}
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-2 bg-transparent rounded-lg"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </div>
            <Artifact className="flex-1 overflow-hidden">
              {/* File Header */}
              <ArtifactHeader>
                <ArtifactTitle>{extractComponentName(generatedCode)}.tsx</ArtifactTitle>
                <ArtifactActions>
                  <ArtifactAction
                    tooltip="Copy code"
                    onClick={copyComponent}
                  >
                    <Copy className="w-4 h-4" />
                  </ArtifactAction>
                  <ArtifactAction
                    tooltip="Download file"
                    onClick={downloadComponent}
                  >
                    <Download className="w-4 h-4" />
                  </ArtifactAction>
                </ArtifactActions>
              </ArtifactHeader>
              <ArtifactContent className="h-full overflow-y-auto scrollbar-hide">
                <CodeMirror
                  value={generatedCode}
                  onChange={(value) => setGeneratedCode(value)}
                  extensions={[javascript({ jsx: true }), EditorView.lineWrapping]}
                  theme={theme === "dark" ? oneDark : undefined}
                  className="h-full" />
              </ArtifactContent>
            </Artifact>
          </TabsContent>

          <TabsContent value="instructions" className="flex-1 p-6 pt-4 overflow-hidden">
            <Artifact className="h-full overflow-hidden">
              <ArtifactHeader>
                <div>
                  <ArtifactTitle>Component Documentation</ArtifactTitle>
                  <ArtifactDescription>Comprehensive usage guide and API integration details</ArtifactDescription>
                </div>
                <ArtifactActions>
                  <ArtifactAction
                    tooltip="Copy documentation"
                    onClick={() => {
                      navigator.clipboard.writeText(instructions)
                      toast.success("Documentation copied to clipboard!")
                    } }
                  >
                    <Copy className="w-4 h-4" />
                  </ArtifactAction>
                </ArtifactActions>
              </ArtifactHeader>
              <ArtifactContent className="h-full overflow-y-auto scrollbar-hide">
                <div className="prose prose-sm max-w-none text-foreground leading-relaxed p-6">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-2xl font-bold text-foreground mb-4 mt-0 border-b border-border pb-2">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-xl font-semibold text-foreground mb-3 mt-6 first:mt-0">{children}</h2>
                      ),
                      p: ({ children }) => <p className="text-foreground mb-4 leading-relaxed">{children}</p>,
                      ul: ({ children }) => <ul className="list-none space-y-2 mb-4 pl-0">{children}</ul>,
                      li: ({ children }) => (
                        <li className="flex items-start gap-2 text-foreground">
                          <span className="text-primary mt-1 text-sm">•</span>
                          <span className="flex-1">{children}</span>
                        </li>
                      ),
                      strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                      code: ({ children, className }) => {
                        const isInline = !className
                        return isInline ? (
                          <code className="bg-muted text-foreground px-1.5 py-0.5 rounded text-sm font-mono border">
                            {children}
                          </code>
                        ) : (
                          <CodeBlock code={String(children)} language="javascript">
                            <CodeBlockCopyButton />
                          </CodeBlock>
                        )
                      },
                      pre: ({ children, ...props }) => {
                        const child = children as any
                        const className = child?.props?.className || ""
                        const match = /language-(\w+)/.exec(className)
                        const language = match ? match[1] : "javascript"

                        return (
                          <div className="mb-4 mt-2">
                            <SyntaxHighlighter
                              style={theme === "dark" ? syntaxOneDark : syntaxOneLight}
                              language={language}
                              customStyle={{
                                margin: 0,
                                borderRadius: "0.5rem",
                                backgroundColor: theme === "dark" ? "hsl(var(--muted))" : "hsl(var(--muted))",
                                border: "1px solid hsl(var(--border))",
                                fontSize: "0.875rem",
                                lineHeight: "1.5",
                              }}
                              {...props}
                            >
                              {String(child?.props?.children || "").replace(/\n$/, "")}
                            </SyntaxHighlighter>
                          </div>
                        )
                      },
                    }}
                  >
                    {instructions}
                  </ReactMarkdown>

                  {/* Web Preview for external documentation */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <h3 className="text-lg font-semibold mb-4">External Resources</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg bg-card">
                        <h4 className="font-medium mb-2">React Documentation</h4>
                        <p className="text-sm text-muted-foreground mb-3">Official React documentation for components and hooks</p>
                        <Button size="sm" variant="outline" asChild>
                          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                            Visit Docs
                          </a>
                        </Button>
                      </div>
                      <div className="p-4 border rounded-lg bg-card">
                        <h4 className="font-medium mb-2">Tailwind CSS</h4>
                        <p className="text-sm text-muted-foreground mb-3">Utility-first CSS framework for styling</p>
                        <Button size="sm" variant="outline" asChild>
                          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                            Visit Docs
                          </a>
                        </Button>
                      </div>
                      <div className="p-4 border rounded-lg bg-card">
                        <h4 className="font-medium mb-2">Origin UI Components</h4>
                        <p className="text-sm text-muted-foreground mb-3">Beautiful, accessible React components</p>
                        <Button size="sm" variant="outline" asChild>
                          <a href="https://origin-ui.com" target="_blank" rel="noopener noreferrer">
                            Visit Docs
                          </a>
                        </Button>
                      </div>
                      <div className="p-4 border rounded-lg bg-card">
                        <h4 className="font-medium mb-2">TypeScript Handbook</h4>
                        <p className="text-sm text-muted-foreground mb-3">TypeScript documentation and guides</p>
                        <Button size="sm" variant="outline" asChild>
                          <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">
                            Visit Docs
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </ArtifactContent>
            </Artifact>
          </TabsContent>
        </Tabs>
      </div>}
    />
  )
}
