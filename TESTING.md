# Testing & Quality Assurance

## Current Status

> [!NOTE]
> Automated testing (Unit/Integration) is currently **pending implementation**.

## Linting

We use **ESLint** to maintain code quality and catch errors early.

To check for linting errors:

```bash
npm run lint
```

## Recommended Testing Strategy (Future)

We recommend adopting the following stack for future testing implementation:

1.  **Vitest**: Fast unit test runner, compatible with Vite.
2.  **React Testing Library**: For testing components in a way that resembles user usage.
3.  **Cypress** or **Playwright**: For End-to-End (E2E) testing.

### Example Setup (Vitest)

1.  Install: `npm i -D vitest @testing-library/react jsdom`
2.  Configure `vite.config.ts`: add `test` environment.
3.  Run: `npx vitest`

## Manual Verification

Until automated tests are fully in place, please manually verify:

1.  **Authentication Flow**: Login, Register, Logout.
2.  **Responsiveness**: Check UI on Mobile vs Desktop.
3.  **Forms**: Validation errors appear correctly on invalid input.
4.  **Theme**: Dark/Light mode toggle (if applicable).
