"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/origin-ui/button"
import { ScrollArea } from "../components/origin-ui/scroll-area"
import { Alert, AlertDescription, AlertTitle } from "../components/origin-ui/alert"
import { Terminal, Lightbulb, AlertCircle, Code2, Wand2 } from "lucide-react"
import { useToast } from "../components/origin-ui/use-toast"

type DebugLevel = 'error' | 'warning' | 'info'

interface DebugMessage {
  id: string
  message: string
  level: DebugLevel
  line?: number
  column?: number
  suggestion?: string
  codeSnippet?: string
}

interface DebugAssistantProps {
  code: string
  language: string
  onApplyFix?: (fixedCode: string) => void
}

export function DebugAssistant({ code, language, onApplyFix }: DebugAssistantProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [messages, setMessages] = useState<DebugMessage[]>([])
  const [showDebugger, setShowDebugger] = useState(false)
  const { toast } = useToast()

  const analyzeCode = async () => {
    if (!code.trim()) {
      toast({
        title: "No code to analyze",
        description: "Please enter some code to analyze",
        variant: "destructive",
      })
      return
    }

    setIsAnalyzing(true)
    setMessages([])

    try {
      // Simulate analysis - in a real app, you would call an API or use a linter
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock analysis results - replace with actual analysis
      const mockIssues: DebugMessage[] = []
      
      // Check for common React issues
      if (language === 'jsx' || language === 'tsx') {
        const reactHooksRegex = /(useState|useEffect|useContext|useReducer|useCallback|useMemo|useRef|useImperativeHandle|useLayoutEffect|useDebugValue|useDeferredValue|useTransition|useId|useSyncExternalStore|useInsertionEffect)\([^)]*\)/g;
        const hooks = code.match(reactHooksRegex) || []
        
        if (hooks.length > 0) {
          // Check for missing React import if using hooks
          if (!code.includes('import React') && !code.includes('import * as React')) {
            mockIssues.push({
              id: 'react-import',
              message: 'Missing React import when using hooks',
              level: 'error',
              suggestion: 'Add `import React from \'react\'` at the top of your file',
            })
          }
          
          // Check for missing dependencies in useEffect/useCallback
          const effectRegex = /(useEffect|useCallback|useMemo|useLayoutEffect|useInsertionEffect)\(([\s\S]*?)(?=,|\s*\{)/g
          let match
          while ((match = effectRegex.exec(code)) !== null) {
            const hookType = match[1]
            const deps = match[2].trim()
            
            if (deps === '') {
              mockIssues.push({
                id: `missing-deps-${match.index}`,
                message: `Empty dependency array in ${hookType}`,
                level: 'warning',
                suggestion: `Consider adding dependencies to the dependency array of ${hookType}`,
              })
            } else if (deps === '[]' && hookType !== 'useEffect') {
              mockIssues.push({
                id: `empty-deps-${match.index}`,
                message: `Empty dependency array in ${hookType}`,
                level: 'warning',
                suggestion: `If you want to run this ${hookType} only once, consider using useRef to track if it has already run`,
              })
            }
          }
        }
      }
      
      // Check for common TypeScript/JavaScript issues
      const tsIssues = []
      
      // Check for unused variables
      const varRegex = /(const|let|var)\s+([a-zA-Z_$][0-9a-zA-Z_$]*)\s*=/g
      const usedVars = new Set()
      let varMatch
      
      // Find all variable declarations
      const varDeclarations = []
      while ((varMatch = varRegex.exec(code)) !== null) {
        const varName = varMatch[2]
        varDeclarations.push({
          name: varName,
          index: varMatch.index,
        })
      }
      
      // Find all variable usages (simplified)
      varDeclarations.forEach(decl => {
        const usageRegex = new RegExp(`\\b${decl.name}\\b`, 'g')
        const usages = code.match(usageRegex) || []
        
        if (usages.length <= 1) {
          mockIssues.push({
            id: `unused-var-${decl.index}`,
            message: `Unused variable '${decl.name}'`,
            level: 'warning',
            suggestion: `Remove the unused variable '${decl.name}' or use it in your code`,
          })
        }
      })
      
      // Add some mock issues if none were found
      if (mockIssues.length === 0) {
        mockIssues.push({
          id: 'no-issues',
          message: 'No issues found in your code!',
          level: 'info',
          suggestion: 'Your code looks good. Keep up the good work!',
        })
      }
      
      setMessages(mockIssues)
      setShowDebugger(true)
      
      if (mockIssues.some(issue => issue.level === 'error')) {
        toast({
          title: "Issues found",
          description: "We found some issues in your code that need attention",
          variant: "destructive",
        })
      } else if (mockIssues.length > 0) {
        toast({
          title: "Analysis complete",
          description: `Found ${mockIssues.length} potential issue${mockIssues.length > 1 ? 's' : ''} to review`,
        })
      } else {
        toast({
          title: "No issues found",
          description: "Your code looks good!",
        })
      }
    } catch (error) {
      console.error('Error analyzing code:', error)
      toast({
        title: "Error",
        description: "Failed to analyze code",
        variant: "destructive",
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  const getIcon = (level: DebugLevel) => {
    switch (level) {
      case 'error':
        return <AlertCircle className="h-4 w-4" />
      case 'warning':
        return <Lightbulb className="h-4 w-4" />
      case 'info':
      default:
        return <Code2 className="h-4 w-4" />
    }
  }

  const getVariant = (level: DebugLevel) => {
    switch (level) {
      case 'error':
        return 'destructive'
      case 'warning':
        return 'warning'
      case 'info':
      default:
        return 'default'
    }
  }

  return (
    <div className="border rounded-md overflow-hidden">
      <div className="bg-muted/50 p-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Terminal className="h-4 w-4" />
          <span className="font-medium">Debug Assistant</span>
          {messages.length > 0 && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-background">
              {messages.length} issue{messages.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={analyzeCode}
          disabled={isAnalyzing}
        >
          {isAnalyzing ? 'Analyzing...' : 'Analyze Code'}
        </Button>
      </div>
      
      {(showDebugger || messages.length > 0) && (
        <div className="max-h-64 overflow-auto">
          {messages.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">
              No issues found. Your code looks good!
            </div>
          ) : (
            <div className="divide-y">
              {messages.map((msg) => (
                <div key={msg.id} className="p-3 hover:bg-muted/50">
                  <Alert variant={getVariant(msg.level)}>
                    <div className="flex items-start space-x-2">
                      <div className="mt-0.5">{getIcon(msg.level)}</div>
                      <div className="flex-1">
                        <AlertTitle className="text-sm font-medium">
                          {msg.message}
                          {msg.line && (
                            <span className="text-muted-foreground text-xs ml-2">
                              Line {msg.line}
                              {msg.column && `:${msg.column}`}
                            </span>
                          )}
                        </AlertTitle>
                        {msg.suggestion && (
                          <AlertDescription className="mt-1 text-sm">
                            <div className="flex items-start">
                              <Wand2 className="h-3.5 w-3.5 mt-0.5 mr-1.5 flex-shrink-0" />
                              <span>{msg.suggestion}</span>
                            </div>
                          </AlertDescription>
                        )}
                        {msg.codeSnippet && (
                          <div className="mt-2 bg-muted p-2 rounded text-xs font-mono overflow-x-auto">
                            {msg.codeSnippet}
                          </div>
                        )}
                      </div>
                      {onApplyFix && msg.level === 'error' && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="ml-2"
                          onClick={() => {
                            // In a real app, you would implement the actual fix logic
                            toast({
                              title: "Fix applied",
                              description: "The suggested fix has been applied to your code",
                            })
                          }}
                        >
                          Fix
                        </Button>
                      )}
                    </div>
                  </Alert>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
