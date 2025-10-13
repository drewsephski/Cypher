import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { CopyButton } from "@/components/ui/copy-button";
import { cn } from "@/lib/utils";
import type { UIMessage } from "ai";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, HTMLAttributes, ReactNode } from "react";

export type MessageProps = HTMLAttributes<HTMLDivElement> & {
  from: UIMessage["role"];
  content?: string;
};

export const Message = ({ 
  className, 
  from, 
  content = '', 
  children, 
  ...props 
}: MessageProps & { children?: ReactNode }) => (
  <div
    className={cn(
      "group relative flex w-full items-end gap-2 py-4",
      from === "user" ? "justify-end" : "flex-row-reverse justify-end",
      className
    )}
    {...props}
  >
    {children}
    {from === 'assistant' && content && (
      <div className="absolute -right-2 top-4 opacity-0 transition-opacity group-hover:opacity-100">
        <CopyButton value={content} className="h-7 w-7" />
      </div>
    )}
  </div>
);

const messageContentVariants = cva(
  "relative flex flex-col gap-2 overflow-hidden rounded-lg text-sm",
  {
    variants: {
      variant: {
        contained: [
          "max-w-[80%] px-4 py-3",
          "group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground",
          "group-[.is-assistant]:bg-secondary group-[.is-assistant]:text-foreground",
        ],
        flat: [
          "group-[.is-user]:max-w-[80%] group-[.is-user]:bg-secondary group-[.is-user]:px-4 group-[.is-user]:py-3 group-[.is-user]:text-foreground",
          "group-[.is-assistant]:text-foreground",
        ],
      },
    },
    defaultVariants: {
      variant: "contained",
    },
  }
);

export type MessageContentProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof messageContentVariants>;

export const MessageContent = ({
  children,
  className,
  variant,
  ...props
}: MessageContentProps) => (
  <div
    className={cn(
      messageContentVariants({ variant, className }),
      "group-[.is-user]:dark" // Moved dark mode class here for better organization
    )}
    {...props}
  >
    {children}
  </div>
);

export type MessageAvatarProps = ComponentProps<typeof Avatar> & {
  src: string;
  name?: string;
};

export const MessageAvatar = ({
  src,
  name,
  className,
  ...props
}: MessageAvatarProps) => (
  <Avatar className={cn("size-8 ring-1 ring-border", className)} {...props}>
    <AvatarImage alt="" className="mt-0 mb-0" src={src} />
    <AvatarFallback>{name?.slice(0, 2) || "ME"}</AvatarFallback>
  </Avatar>
);