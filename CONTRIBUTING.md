# Contributing to Circle Frontend

We welcome contributions to the Circle UI!

## Code of Conduct

Please review our [Code of Conduct](CODE_OF_CONDUCT.md) before participating.

## Workflow

1.  **Fork** the repository.
2.  **Clone** your fork.
3.  Create a **Feature Branch** (`git checkout -b feature/amazing-feature`).
4.  **Commit** your changes (`git commit -m 'feat: Add amazing feature'`).
    *   Please follow [Conventional Commits](https://www.conventionalcommits.org/).
5.  **Push** to the branch (`git push origin feature/amazing-feature`).
6.  Open a **Pull Request**.

## Contribution Guidelines

### Components
*   Ensure all new components are responsive.
*   Use Chakra UI components where possible for consistency.
*   Abstract complex logic into custom hooks.

### State Management
*   If adding global state, create a new Slice in `src/store/slices`.
*   Do not pollute the global store with local UI state (use `useState` for that).

### Images/Assets
*   Place images in `src/assets`.
*   Optimize images before committing.

## Reporting Issues

*   Check existing issues before creating a new one.
*   Use the issue templates provided.
*   Include browser version and OS in bug reports.
