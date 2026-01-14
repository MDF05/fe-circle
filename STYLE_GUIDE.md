# Style Guide

This project follows strict coding standards to ensure maintainability and consistency.

## Language Standards

- **Language**: TypeScript (strict mode).
- **Target**: ESNext.

## Coding Conventions

### Components
*   Use **Functional Components** with Hooks.
*   **PascalCase** for filenames and component names (e.g., `ThreadCard.tsx`).
*   One component per file (exceptions for tiny local sub-components).

```tsx
// Good
export const MyComponent = () => {
  return <div>Hello</div>;
};

// Bad
export default function myComponent() {} // Avoid default exports if possible
```

### Hooks
*   **camelCase** starting with `use` (e.g., `useAuth`).

### State (Redux)
*   Slice names need to be descriptive (e.g., `authSlice`, `uiSlice`).
*   Action types should be namespaced (e.g., `auth/login`).

## Styling Conventions

### Hybrid Strategy
We use both Chakra UI and Tailwind. To avoid conflicts and mess:

1.  **Layout**: Use Tailwind classes (`flex`, `grid`, `w-full`, `p-4`) or Chakra's Layout components (`Box`, `Flex`, `Stack`). **Pick one for a specific component and stick to it.**
2.  **Interactive Elements**: Prefer Chakra UI components (`Button`, `Input`) for accessibility.
3.  **Custom CSS**: Avoid `index.css` global styles unless resetting. Use Chakra's `sx` prop or Tailwind classes.

### Tailwind Specifics
*   Order classes logically: Layout -> Spacing -> Sizing -> Typography -> Visuals -> Misc.
*   Use `classname` util (like `clsx` or `classnames`) if conditional logic is needed.

## Naming

*   **Variables**: `camelCase`
*   **Constants**: `UPPER_SNAKE_CASE` (e.g., `MAX_THREAD_LENGTH`)
*   **Interfaces/Types**: `PascalCase`. Do not prefix with `I` (e.g., `User` not `IUser`).

## Linting

Run linting to check for issues:

```bash
npm run lint
```

We use **ESLint** with standard React/TypeScript configs.
