---
trigger: model_decision
description: When using AI Elements
---

Vercel AI Elements is a React component library built on shadcn/ui that provides pre-built, customizable components specifically designed for AI applications. All components integrate seamlessly with the Vercel AI SDK and support streaming, attachments, tool usage tracking, and token consumption monitoring.

## Core Components

### Conversation Component

Container component for chat conversations with automatic scroll-to-bottom behavior, empty states, and scroll controls.

```tsx
'use client';

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';

export default function ChatInterface() {
  return (
    <Conversation className="h-screen">
      <ConversationContent>
        <ConversationEmptyState
          title="No messages yet"
          description="Start a conversation to see messages here"
          icon={<MessageSquareIcon className="size-6" />}
        />
      </ConversationContent>
      <ConversationScrollButton />
    </Conversation>
  );
}
```

### Message Component

Individual chat message component with support for user/assistant roles, avatars, and flexible content styling.

```tsx
'use client';

import { Message, MessageContent, MessageAvatar } from '@/components/ai-elements/message';

export default function MessageExample() {
  return (
    <>
      {/* User message with contained variant (default) */}
      <Message from="user">
        <MessageContent variant="contained">
          What is the capital of France?
        </MessageContent>
        <MessageAvatar
          src="https://github.com/username.png"
          name="John Doe"
        />
      </Message>

      {/* Assistant message with flat variant */}
      <Message from="assistant">
        <MessageContent variant="flat">
          <Response>
            The capital of France is **Paris**.
          </Response>
        </MessageContent>
        <MessageAvatar
          src="https://github.com/ai-bot.png"
          name="AI Assistant"
        />
      </Message>
    </>
  );
}
```

### Response Component

Markdown renderer with streaming support for displaying AI responses with proper formatting.

```tsx
'use client';

import { Response } from '@/components/ai-elements/response';

export default function StreamingResponse() {
  return (
    <div className="p-4">
      <Response className="prose dark:prose-invert max-w-none">
        AI response content here
      </Response>
    </div>
  );
}
```

### CodeBlock Component

Syntax-highlighted code display with copy functionality and dual theme support.

```tsx
'use client';

import { CodeBlock, CodeBlockCopyButton } from '@/components/ai-elements/code-block';

export default function CodeBlockExample() {
  return (
    <div className="p-4">
      <CodeBlock
        code={`function example() { return "Hello World"; }`}
        language="typescript"
        showLineNumbers={true}
      >
        <CodeBlockCopyButton
          onCopy={() => console.log('Code copied!')}
          timeout={3000}
        />
      </CodeBlock>
    </div>
  );
}
```

### Tool Component

Tool usage visualization with collapsible content for displaying function calls and results.

```tsx
'use client';

import {
  Tool,
  ToolHeader,
  ToolContent,
  ToolInput,
  ToolOutput,
} from '@/components/ai-elements/tool';

export default function ToolExample() {
  const toolCall = {
    type: 'function',
    state: 'completed',
    input: { location: 'New York' },
    output: { temperature: 72, condition: 'Sunny' },
  };

  return (
    <div className="p-4">
      <Tool defaultOpen>
        <ToolHeader
          title="Get Weather"
          type={toolCall.type}
          state={toolCall.state}
        />
        <ToolContent>
          <ToolInput input={toolCall.input} />
          <ToolOutput
            output={toolCall.output}
            errorText={toolCall.errorText}
          />
        </ToolContent>
      </Tool>
    </div>
  );
}
```

### Reasoning Component

Display AI reasoning and thought processes with collapsible content and auto-timing.

```tsx
'use client';

import {
  Reasoning,
  ReasoningTrigger,
  ReasoningContent,
} from '@/components/ai-elements/reasoning';

export default function ReasoningExample() {
  return (
    <div className="p-4">
      <Reasoning isStreaming={true} defaultOpen>
        <ReasoningTrigger />
        <ReasoningContent>
          Step-by-step reasoning process...
        </ReasoningContent>
      </Reasoning>
    </div>
  );
}
```

### Context Component

Display token consumption and cost tracking with hover card visualization.

```tsx
'use client';

import {
  Context,
  ContextTrigger,
  ContextContent,
  ContextInputUsage,
  ContextOutputUsage,
} from '@/components/ai-elements/context';

export default function ContextExample() {
  const usage = {
    inputTokens: 1250,
    outputTokens: 480,
    reasoningTokens: 2100,
  };

  return (
    <div className="p-4">
      <Context
        usedTokens={3830}
        maxTokens={128000}
        usage={usage}
        modelId="gpt-4-1106-preview"
      >
        <ContextTrigger />
        <ContextContent>
          <ContextInputUsage />
          <ContextOutputUsage />
        </ContextContent>
      </Context>
    </div>
  );
}
```

### Artifact Component

Display code or document artifacts with customizable headers, actions, and content areas.

```tsx
'use client';

import {
  Artifact,
  ArtifactHeader,
  ArtifactTitle,
  ArtifactDescription,
  ArtifactActions,
  ArtifactAction,
  ArtifactClose,
  ArtifactContent,
} from '@/components/ai-elements/artifact';

export default function ArtifactExample() {
  return (
    <Artifact className="w-full max-w-2xl">
      <ArtifactHeader>
        <div>
          <ArtifactTitle>React Component</ArtifactTitle>
          <ArtifactDescription>
            A simple hello world component
          </ArtifactDescription>
        </div>
        <ArtifactActions>
          <ArtifactAction
            tooltip="Copy code"
            icon={CopyIcon}
            onClick={() => navigator.clipboard.writeText(code)}
          />
          <ArtifactClose onClick={() => setIsOpen(false)} />
        </ArtifactActions>
      </ArtifactHeader>
      <ArtifactContent>
        <CodeBlock code={code} language="tsx" showLineNumbers />
      </ArtifactContent>
    </Artifact>
  );
}
```

## Complete Chat Application Example

Full-featured chat application combining multiple components:

```tsx
'use client';

import { useChat } from '@ai-sdk/react';
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent, MessageAvatar } from '@/components/ai-elements/message';
import { Response } from '@/components/ai-elements/response';
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
  PromptInputSubmit,
  PromptInputAttachments,
  PromptInputAttachment,
} from '@/components/ai-elements/prompt-input';
import { Suggestions, Suggestion } from '@/components/ai-elements/suggestion';
import { Loader } from '@/components/ai-elements/loader';

export default function CompleteChat() {
  const { messages, status, append, input, setInput } = useChat({
    api: '/api/chat',
  });

  const suggestions = [
    'Explain how React hooks work',
    'Write a REST API with Express',
    'Debug my TypeScript code',
  ];

  return (
    <div className="flex h-screen flex-col">
      <Conversation className="flex-1">
        <ConversationContent>
          {messages.length === 0 ? (
            <ConversationEmptyState
              title="Start a conversation"
              description="Ask me anything or try one of the suggestions below"
              icon={<MessageSquareIcon className="size-8" />}
            />
          ) : (
            messages.map((message, index) => (
              <Message key={index} from={message.role}>
                <MessageContent>
                  <Response>{message.content}</Response>
                </MessageContent>
                <MessageAvatar
                  src={message.role === 'user' ? '/user.png' : '/ai.png'}
                  name={message.role === 'user' ? 'You' : 'AI'}
                />
              </Message>
            ))
          )}
          {status === 'streaming' && (
            <div className="flex items-center gap-2 py-4">
              <Loader size={16} />
              <span className="text-sm text-muted-foreground">
                AI is thinking...
              </span>
            </div>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      {messages.length === 0 && (
        <div className="border-t p-4">
          <Suggestions>
            {suggestions.map((suggestion) => (
              <Suggestion
                key={suggestion}
                suggestion={suggestion}
                onClick={(text) => setInput(text)}
              />
            ))}
          </Suggestions>
        </div>
      )}

      <div className="border-t p-4">
        <PromptInput
          accept="image/*"
          multiple
          onSubmit={async (message) => {
            await append({
              role: 'user',
              content: [
                { type: 'text', text: message.text || '' },
                ...(message.files || []),
              ],
            });
          }}
        >
          <PromptInputAttachments>
            {(attachment) => <PromptInputAttachment data={attachment} />}
          </PromptInputAttachments>

          <PromptInputTextarea placeholder="Ask me anything..." />

          <PromptInputToolbar>
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger />
                <PromptInputActionMenuContent>
                  <PromptInputActionAddAttachments />
                </PromptInputActionMenuContent>
              </PromptInputActionMenu>
            </PromptInputTools>

            <PromptInputSubmit status={status} />
          </PromptInputToolbar>
        </PromptInput>
      </div>
    </div>
  );
}
```

