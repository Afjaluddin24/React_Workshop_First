# React Workshop First

A React + TypeScript + Vite starter project for learning React development with modern tooling.

## 📁 Project Structure

```
React_Workshop_First/
├── README.md                 # Root project documentation
├── Fone_feg/                # Main application folder
│   ├── package.json         # Project dependencies and scripts
│   ├── vite.config.ts       # Vite configuration
│   ├── tsconfig.json        # TypeScript base configuration
│   ├── tsconfig.app.json    # TypeScript app configuration
│   ├── tsconfig.node.json   # TypeScript node configuration
│   ├── eslint.config.js     # ESLint configuration
│   ├── index.html           # HTML entry point
│   ├── README.md            # Vite setup documentation
│   ├── public/              # Static assets
│   └── src/                 # Source code
│       ├── main.tsx         # Application entry point
│       ├── App.tsx          # Root component
│       ├── App.css          # App component styles
│       ├── index.css        # Global styles
│       └── assets/          # Images and other assets
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Setup

```bash
# Navigate to the project
cd Fone_feg

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server with HMR (Hot Module Replacement) |
| `npm run build` | Compile TypeScript and build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting
- **SWC/Babel** - JavaScript compiler with Fast Refresh

## 📝 Key Files

- **src/main.tsx** - React app initialization and DOM rendering
- **src/App.tsx** - Root component with counter example
- **vite.config.ts** - Vite build configuration
- **package.json** - Dependencies and project metadata

## 💡 Getting Started with Development

1. Open `src/App.tsx` and start editing
2. Changes will automatically reflect in the browser (HMR)
3. Click the Vite and React logos to learn more
4. Check out the counter example to understand React hooks

## 🔧 Configuration

- **TypeScript**: Configured in `tsconfig.json` with strict mode for app code
- **ESLint**: Enabled for code quality checks - run `npm run lint`
- **Vite**: Uses React plugin for fast HMR and optimized builds

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Guide](https://vite.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)