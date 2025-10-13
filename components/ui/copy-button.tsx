'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
  className?: string;
}

export function CopyButton({ value, className, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(
        'h-8 w-8 rounded-full p-0 opacity-0 transition-opacity group-hover:opacity-100',
        className
      )}
      onClick={copyToClipboard}
      aria-label="Copy to clipboard"
      title="Copy to clipboard"
      {...props}
    >
      {hasCopied ? (
        <Check className="h-4 w-4" aria-hidden="true" data-testid="check-icon" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" data-testid="copy-icon" />
      )}
      <span className="sr-only">
        {hasCopied ? 'Copied!' : 'Copy to clipboard'}
      </span>
    </Button>
  );
}