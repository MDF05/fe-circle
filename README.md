# Circle Frontend (Stage 2 Online)

Welcome to the **Circle Frontend** repository. This is the web client for the Circle social platform, built with modern web technologies to provide a fast, responsive, and interactive user experience.

## 📋 Table of Contents

This README serves as the central hub for all documentation. Please refer to the specific documents below for detailed information.

### 📚 Core Documentation

- **[Architecture](ARCHITECTURE.md)**: Project structure, state management, and component design.
- **[Style Guide](STYLE_GUIDE.md)**: Coding standards, component naming, and styling conventions.
- **[Environment Variables](ENVIRONMENT.md)**: Configuration reference for `.env` files.
- **[Deployment](DEPLOYMENT.md)**: Build instructions, previewing, and Vercel deployment.
- **[Testing](TESTING.md)**: Linting and testing strategies.

### 🤝 contribution & Community

- **[Contributing](CONTRIBUTING.md)**: Workflow for submitting pull requests.
- **[Code of Conduct](CODE_OF_CONDUCT.md)**: Community standards and expectations.
- **[Support](SUPPORT.md)**: How to get help.

### 📢 Project Information

- **[Changelog](CHANGELOG.md)**: History of changes and releases.
- **[Roadmap](ROADMAP.md)**: Future plans and upcoming features.
- **[Disclaimer](DISCLAIMER.md)**: Liability and warranty information.
- **[License](LICENSE)**: Legal usage terms.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v18+ (Recommended)
- **npm** or **yarn**

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/circle-frontend.git
    cd circle-frontend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    Copy `.env.example` to `.env` and fill in the required values (mainly API URL).
    ```bash
    cp .env.example .env
    ```
    See [ENVIRONMENT.md](ENVIRONMENT.md) for details.

### Development Workflow

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```
The application will usually be available at `http://localhost:5173`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```
This will generate static assets in the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

## 🛠️ Tech Stack

- **Core**: [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Chakra UI](https://chakra-ui.com/), [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)

## 📄 License

This project is licensed under the **ISC License**. See the [LICENSE](LICENSE) file for details.
