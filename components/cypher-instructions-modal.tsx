"use client"
import { useState, useEffect } from "react"

function CypherInstructionsModal() {
  const [isOpen, setIsOpen] = useState(false)

  // Set window.default only on client side to avoid SSR issues
  useEffect(() => {
    window.default = CypherInstructionsModal
  }, [])

  return (
    <>
      {/* Trigger Button - Enhanced to match tech badge style */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 hover:translate-y-[-2px] hover:scale-105 hover:shadow-xl hover:shadow-primary/20 border border-primary/30 backdrop-blur-md bg-background/50 hover:bg-background/70 rounded-md cursor-pointer"
        aria-label="Open Cypher instructions"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
        How to use Cypher
      </button>

      {/* Modal - Enhanced to match tech badge modal style */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div
            className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Header - Enhanced */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">Cypher AI Assistant</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4">
                AI-powered React component generator that creates production-ready components with API integrations using mock data.
              </p>

              {/* Key Features Section */}
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  <li className="text-sm text-muted-foreground flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0" />
                    Origin UI design system
                  </li>
                  <li className="text-sm text-muted-foreground flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0" />
                    Responsive design for all screen sizes
                  </li>
                  <li className="text-sm text-muted-foreground flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0" />
                    Mock data for safe, reliable demos
                  </li>
                  <li className="text-sm text-muted-foreground flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0" />
                    Inline SVGs for icons and illustrations
                  </li>
                </ul>
              </div>

              {/* Integration Section */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">How to Use:</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Simply describe the component you want to build. Include API documentation URLs for integration, specify design requirements, and ask for modifications or improvements.
                </p>

                {/* Example Request */}
                <div className="bg-muted/50 p-3 rounded-lg mb-3">
                  <p className="text-xs font-medium text-foreground mb-1">Example Request:</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    "Create a user profile card component with avatar, name, and edit button"
                  </p>
                </div>

                {/* Important Notes */}
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• All API calls use mock data (no real network requests)</p>
                  <p>• Components include error states and retry functionality</p>
                  <p>• Always uses inline SVGs (no external images)</p>
                  <p>• Follows accessibility best practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CypherInstructionsModal
