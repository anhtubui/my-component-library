import clsx from "clsx";
import * as React from "react";
import styles from "./index.module.css";

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
    <button
      data-slot="button"
      className={clsx(styles.button, styles[variant], styles[size], className)}
      {...props}
    />
  );
}

export { Button };
