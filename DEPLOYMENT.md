# Deployment Guide

This document outlines how to build and deploy the **Circle Frontend**.

## Build Process

The project uses **Vite** for bundling.

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Type Check & Compile**
    It's recommended to run a type check before building to catch any TypeScript errors.
    ```bash
    npm run build
    ```
    (Note: `npm run build` executes `tsc -b && vite build`)

    **Output**: A `dist/` folder containing the optimized production assets (HTML, CSS, JS).

3.  **Preview Build**
    To test the production build locally:
    ```bash
    npm run preview
    ```

## Vercel Deployment (Recommended)

This project includes a `vercel.json` and is optimized for Vercel.

1.  Push your code to GitHub.
2.  Import project into Vercel.
3.  **Build Command**: `npm run build`
4.  **Output Directory**: `dist`
5.  **Environment Variables**: Add your `VITE_API_BASE_URL` in the project settings.

## Static Hosting (Netlify, AWS S3, etc.)

Since the output is static, you can deploy the `dist/` folder to any static hosting provider.

**Important for Client-Side Routing**:
Ensure your host is configured to redirect all 404s to `index.html`. This is necessary for React Router to handle deep links.

**Example Nginx Config**:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
