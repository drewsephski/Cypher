"use client"

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "../components/ui/resizable"

interface ResizableChatLayoutProps {
  leftPanel: React.ReactNode
  rightPanel: React.ReactNode
}

export function ResizableChatLayout({ leftPanel, rightPanel }: ResizableChatLayoutProps) {
  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden pt-16">
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        <ResizablePanel defaultSize={50} minSize={30} maxSize={70} className="overflow-auto">
          {leftPanel}
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={50} minSize={30} maxSize={70} className="overflow-auto">
          {rightPanel}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}