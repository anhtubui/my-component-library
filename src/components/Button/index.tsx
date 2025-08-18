import styled from "@emotion/styled";
import * as React from "react";

// Base button styled component
const StyledButton = styled.button<{
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size: "defaultSize" | "sm" | "lg" | "icon";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.15s ease-in-out;
  outline: none;
  flex-shrink: 0;
  border: none;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  & svg {
    pointer-events: none;
    flex-shrink: 0;
  }

  & svg:not([class*="size-"]) {
    width: 1rem;
    height: 1rem;
  }

  &:focus-visible {
    border-color: hsl(var(--spray-ui-ring));
    box-shadow: 0 0 0 3px hsl(var(--spray-ui-ring) / 0.5);
  }

  &[aria-invalid="true"] {
    box-shadow: 0 0 0 3px hsl(var(--spray-ui-destructive) / 0.2);
    border-color: hsl(var(--spray-ui-destructive));
  }

  .dark &[aria-invalid="true"] {
    box-shadow: 0 0 0 3px hsl(var(--spray-ui-destructive) / 0.4);
  }

  /* Variants */
  ${({ variant }) => {
    switch (variant) {
      case "default":
        return `
          background-color: hsl(var(--spray-ui-primary));
          color: hsl(var(--spray-ui-primary-foreground));
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          
          &:hover {
            background-color: hsl(var(--spray-ui-primary) / 0.9);
          }
        `;
      case "destructive":
        return `
          background-color: hsl(var(--spray-ui-destructive));
          color: white;
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          
          &:hover {
            background-color: hsl(var(--spray-ui-destructive) / 0.9);
          }
          
          &:focus-visible {
            box-shadow: 0 0 0 3px hsl(var(--spray-ui-destructive) / 0.2);
          }
          
          .dark &:focus-visible {
            box-shadow: 0 0 0 3px hsl(var(--spray-ui-destructive) / 0.4);
          }
          
          .dark & {
            background-color: hsl(var(--spray-ui-destructive) / 0.6);
          }
        `;
      case "outline":
        return `
          border: 1px solid hsl(var(--spray-ui-border));
          background-color: hsl(var(--spray-ui-background));
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          
          &:hover {
            background-color: hsl(var(--spray-ui-accent));
            color: hsl(var(--spray-ui-accent-foreground));
          }
          
          .dark & {
            background-color: hsl(var(--spray-ui-input) / 0.3);
            border-color: hsl(var(--spray-ui-input));
          }
          
          .dark &:hover {
            background-color: hsl(var(--spray-ui-input) / 0.5);
          }
        `;
      case "secondary":
        return `
          background-color: hsl(var(--spray-ui-secondary));
          color: hsl(var(--spray-ui-secondary-foreground));
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          
          &:hover {
            background-color: hsl(var(--spray-ui-secondary) / 0.8);
          }
        `;
      case "ghost":
        return `
          &:hover {
            background-color: hsl(var(--spray-ui-accent));
            color: hsl(var(--spray-ui-accent-foreground));
          }
          
          .dark &:hover {
            background-color: hsl(var(--spray-ui-accent) / 0.5);
          }
        `;
      case "link":
        return `
          color: hsl(var(--spray-ui-primary));
          text-decoration: underline;
          text-underline-offset: 4px;
          
          &:hover {
            text-decoration: underline;
          }
        `;
      default:
        return "";
    }
  }}

  /* Sizes */
  ${({ size }) => {
    switch (size) {
      case "defaultSize":
        return `
          height: 2.25rem;
          padding: 0.5rem 1rem;
          
          &:has(> svg) {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        `;
      case "sm":
        return `
          height: 2rem;
          border-radius: 0.375rem;
          gap: 0.375rem;
          padding: 0 0.75rem;
          
          &:has(> svg) {
            padding-left: 0.625rem;
            padding-right: 0.625rem;
          }
        `;
      case "lg":
        return `
          height: 2.5rem;
          border-radius: 0.375rem;
          padding: 0 1.5rem;
          
          &:has(> svg) {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        `;
      case "icon":
        return `
          width: 2.25rem;
          height: 2.25rem;
        `;
      default:
        return "";
    }
  }}
`;

function Button({
  className,
  variant = "default",
  size = "defaultSize",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "defaultSize" | "sm" | "lg" | "icon";
  asChild?: boolean;
}) {
  return (
    <StyledButton
      data-slot="button"
      variant={variant}
      size={size}
      className={className}
      {...props}
    />
  );
}

export { Button };
