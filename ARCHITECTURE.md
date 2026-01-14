# Architecture Overview

This document describes the architecture of the **Circle Frontend**.

## System Design

The application is a Single Page Application (SPA) built with **Vite** and **React**. It utilizes a component-based architecture and robust state management to ensure scalability.

### Core Concepts

1.  **Vite Build Tool**
    *   Provides extremely fast development server start-up and Hot Module Replacement (HMR).
    *   Optimized production builds using Rollup.

2.  **Component Structure**
    *   **Atoms/Molecules/Organisms**: While not strictly enforced, components are generally broken down into smaller, reusable pieces.
    *   **Pages**: Top-level components that represent a full route (e.g., `Home`, `Profile`, `Login`).
    *   **Layouts**: Wrapper components that define the common structure (Sidebar, Navbar) for pages.

3.  **State Management (Redux Toolkit)**
    *   **Store**: Centralized state source.
    *   **Slices**: Modular state logic (e.g., `authSlice`, `threadSlice`).
    *   **Thunks**: Async logic for API calls (e.g., `loginUser`, `fetchThreads`).

4.  **Routing (React Router)**
    *   Manages navigation between views.
    *   Handles protected routes (redirecting unauthenticated users to Login).

## Directory Structure

```
src/
├── assets/         # Static assets (images, global css)
├── components/     # Reusable UI components
├── features/       # Feature-specific logic (Redux slices, specific components)
├── hooks/          # Custom React hooks
├── layout/         # Page layouts (MainLayout, AuthLayout)
├── pages/          # Route components
├── services/       # API integration (Axios instance, endpoints)
├── store/          # Redux store configuration
├── types/          # TypeScript definitions
├── utils/          # Helper functions
├── App.tsx         # Main application component
└── main.tsx        # Entry point
```

## Data Flow

1.  **User Action**: User clicks a button (e.g., "Post Thread").
2.  **Component**: Event handler dispatches a Redux action (Thunk).
3.  **Redux Thunk**: Calls the API service using Axios.
4.  **API Service**: Sends HTTP request to Backend.
5.  **Redux Slice**: Updates state (`loading` -> `success`) with response data.
6.  **Component**: React re-renders with new data from the Store.

## Styling Architecture

We use a **Hybrid Approach**:

*   **Chakra UI**: For base accessible components (Buttons, Modals, Inputs).
*   **Tailwind CSS**: For layout primitives, spacing, and responsive design.
*   **Emotion**: For complex dynamic styling (underlying Chakra).

## Key Libraries

*   **Framer Motion**: Handles page transitions and micro-interactions.
*   **React Hook Form + Zod**: manages complex form validation efficiently.
