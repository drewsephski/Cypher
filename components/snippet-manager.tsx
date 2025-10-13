"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/origin-ui/dialog"
import { Input } from "@/components/origin-ui/input"
import { Button } from "@/components/origin-ui/button"
import { CodeSnippet, getSnippets, saveSnippet, updateSnippet, deleteSnippet } from "../lib/utils/snippets"
import { ScrollArea } from "@/components/origin-ui/scroll-area"
import { Pencil, Trash2, Save, X } from "lucide-react"
import { useToast } from "@/components/origin-ui/use-toast"

interface SnippetManagerProps {
  isOpen: boolean
  onClose: () => void
  onSelectSnippet: (snippet: CodeSnippet) => void
  currentCode: string
  currentLanguage: string
}

export function SnippetManager({
  isOpen,
  onClose,
  onSelectSnippet,
  currentCode,
  currentLanguage,
}: SnippetManagerProps) {
  const [snippets, setSnippets] = useState<CodeSnippet[]>([])
  const [editingSnippet, setEditingSnippet] = useState<CodeSnippet | null>(null)
  const [title, setTitle] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (isOpen) {
      setSnippets(getSnippets())
    }
  }, [isOpen])

  const handleSaveSnippet = () => {
    if (!title.trim()) {
      toast({
        title: "Error",
        description: "Please enter a title for your snippet",
        variant: "destructive",
      })
      return
    }

    setIsSaving(true)
    try {
      if (editingSnippet) {
        const updated = updateSnippet(editingSnippet.id, { title, code: currentCode, language: currentLanguage })
        if (updated) {
          setSnippets(getSnippets())
          setEditingSnippet(null)
          setTitle("")
          toast({
            title: "Success",
            description: "Snippet updated successfully",
          })
        }
      } else {
        saveSnippet({
          title,
          code: currentCode,
          language: currentLanguage,
        })
        setSnippets(getSnippets())
        setTitle("")
        toast({
          title: "Success",
          description: "Snippet saved successfully",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save snippet",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleDeleteSnippet = (id: string) => {
    if (window.confirm("Are you sure you want to delete this snippet?")) {
      if (deleteSnippet(id)) {
        setSnippets(getSnippets())
        toast({
          title: "Success",
          description: "Snippet deleted successfully",
        })
      }
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Manage Code Snippets</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input
              placeholder="Enter snippet title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSaveSnippet} disabled={isSaving}>
              {editingSnippet ? (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Update
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Current Code
                </>
              )}
            </Button>
            {editingSnippet && (
              <Button variant="outline" onClick={() => {
                setEditingSnippet(null)
                setTitle("")
              }}>
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            )}
          </div>

          <ScrollArea className="h-64 border rounded-md p-2">
            {snippets.length === 0 ? (
              <div className="text-center text-muted-foreground py-8">
                No snippets saved yet
              </div>
            ) : (
              <div className="space-y-2">
                {snippets.map((snippet) => (
                  <div
                    key={snippet.id}
                    className="flex items-center justify-between p-2 hover:bg-accent rounded-md group"
                  >
                    <div 
                      className="flex-1 cursor-pointer"
                      onClick={() => onSelectSnippet(snippet)}
                    >
                      <div className="font-medium">{snippet.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {snippet.language} • {new Date(snippet.updatedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 flex space-x-1">
                      <Button
                        variant="ghost"
                        size="default"
                        onClick={(e) => {
                          e.stopPropagation()
                          setEditingSnippet(snippet)
                          setTitle(snippet.title)
                        }}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="default"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDeleteSnippet(snippet.id)
                        }}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
