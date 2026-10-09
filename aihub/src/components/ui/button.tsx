import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-accent text-white hover:bg-accent/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        heroOutline: "border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50",
        teaching: "bg-track-teaching text-white hover:opacity-90 shadow-md",
        research: "bg-track-research text-white hover:opacity-90 shadow-md",
        admin: "bg-track-admin text-white hover:opacity-90 shadow-md",
        consulting: "bg-track-consulting text-white hover:opacity-90 shadow-md",
        kaizen: "bg-track-kaizen text-white hover:opacity-90 shadow-md",
        heroTeal: "bg-teal-500 text-white hover:bg-teal-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        heroIndigo: "bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        heroRose: "bg-rose-500 text-white hover:bg-rose-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
