# My Component Library

A React component library built with TypeScript and Emotion styled components.

## Installation

```bash
npm install my-component-library-1204
# or
yarn add my-component-library-1204
# or
pnpm add my-component-library-1204
```

## Importing CSS Variables

To use the component library's CSS variables (design tokens), you need to import the CSS file. Here are the different ways to do it:

### Option 1: Direct CSS Import (Recommended)

```javascript
// In your main entry file (e.g., index.js, App.js, main.jsx)
import "my-component-library-1204/styles.css";
```

### Option 2: Using the style field

```javascript
// Some bundlers support this syntax
import "my-component-library-1204/dist/styles.css";
```

### Option 3: Side-effect import from the library

```javascript
// Import the global styles module (includes CSS variables)
import "my-component-library-1204/styles/global";
```

## Using Components

```jsx
import React from "react";
import { Button } from "my-component-library-1204";

function App() {
  return (
    <div>
      <Button
        variant="default"
        size="defaultSize"
      >
        Click me
      </Button>

      <Button
        variant="destructive"
        size="sm"
      >
        Delete
      </Button>

      <Button
        variant="outline"
        size="lg"
      >
        Outline Button
      </Button>
    </div>
  );
}
```

## Available CSS Variables

The library provides the following CSS variables with the `spray-ui-` prefix:

### Light Mode Variables

- `--spray-ui-background`
- `--spray-ui-foreground`
- `--spray-ui-primary`
- `--spray-ui-primary-foreground`
- `--spray-ui-secondary`
- `--spray-ui-secondary-foreground`
- `--spray-ui-accent`
- `--spray-ui-accent-foreground`
- `--spray-ui-destructive`
- `--spray-ui-ring`
- `--spray-ui-border`
- `--spray-ui-input`

### Dark Mode Variables

All variables are also available in dark mode when the `.dark` class is applied to a parent element.

## Customizing Variables

You can override the CSS variables in your own CSS:

```css
:root {
  --spray-ui-primary: 220 13% 91%; /* Custom primary color */
  --spray-ui-background: 0 0% 100%; /* Custom background */
}

.dark {
  --spray-ui-primary: 220 13% 91%; /* Custom dark mode primary */
  --spray-ui-background: 224 71% 4%; /* Custom dark mode background */
}
```

## Available Components

### Button

The Button component supports multiple variants and sizes:

#### Variants

- `default` - Primary button style
- `destructive` - Red/danger button style
- `outline` - Outlined button style
- `secondary` - Secondary button style
- `ghost` - Ghost button style
- `link` - Link-style button

#### Sizes

- `defaultSize` - Default button size
- `sm` - Small button
- `lg` - Large button
- `icon` - Square icon button

#### Example Usage

```jsx
import { Button } from 'my-component-library-1204';

// Basic usage
<Button>Default Button</Button>

// With variants and sizes
<Button variant="destructive" size="sm">
  Delete Item
</Button>

// Icon button
<Button variant="outline" size="icon">
  <IconComponent />
</Button>
```

## Peer Dependencies

This library requires the following peer dependencies:

- `react` >= 16.8.0
- `react-dom` >= 16.8.0
- `@emotion/react` ^11.0.0
- `@emotion/styled` ^11.0.0

Make sure these are installed in your project.

## Development

```bash
# Install dependencies
pnpm install

# Build the library
pnpm build

# Type checking
pnpm type-check

# Linting
pnpm lint

# Format code
pnpm format
```
