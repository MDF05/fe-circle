# Environment Variables

The application requires the following environment variables. Copy `.env.example` to `.env` for local development.

Vite exposes env variables on the special `import.meta.env` object. **Note**: Only variables prefixed with `VITE_` are exposed to your client-side code.

## Configuration

| Variable | Description | Example |
| :--- | :--- | :--- |
| `VITE_API_BASE_URL` | The base URL of the backend API | `http://localhost:3000/api/v1` |
| `VITE_RECAPTCHA_SITE_KEY`| Google Recaptcha Site Key | `6Lc...` |

## Example `.env` File

```dotenv
# Backend API URL
VITE_API_BASE_URL=http://localhost:3000/api/v1

# Captcha
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
```

## Production

When deploying to Vercel/Netlify, add these variables in the project settings dashboard.
