import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border-2 border-foreground px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-card text-foreground",
        accent: "bg-accent text-accent-foreground",
        ink: "bg-primary text-primary-foreground",
        ember: "bg-ember text-white",
        outline: "bg-transparent text-foreground border-dashed",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
