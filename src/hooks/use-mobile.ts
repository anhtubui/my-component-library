import * as React from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * useIsMobile
 *
 * Returns true if the current window width is less than the mobile breakpoint.
 * Uses `window.matchMedia` and listens for changes.
 *
 * @returns {boolean} Whether the device is considered mobile.
 *
 * @example
 * const isMobile = useIsMobile();
 * if (isMobile) {
 *   // Render mobile UI
 * }
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    // Use document to ensure this only runs in the browser
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
