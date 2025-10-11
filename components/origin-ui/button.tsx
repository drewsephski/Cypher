import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-200",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
      ghost: "hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary",
    }

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3 text-sm",
      lg: "h-11 px-8",
    }

    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
