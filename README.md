# Business Stalker (BS)

A smart contact management application designed to help you stay connected with your professional network through intelligent interaction suggestions.

![Business Stalker Dashboard](https://github.com/user-attachments/assets/77c5e45c-6456-457d-9bfb-4e330c46238f)

## Features

- **Smart Interaction Suggestions**: Get AI-powered recommendations for when and how to engage with your professional contacts
- **Professional Dashboard**: Clean, intuitive interface showing suggested interactions with your network
- **Contact Management**: Organize and track your interactions with business contacts
- **LinkedIn Integration**: Direct links to LinkedIn profiles for seamless networking

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Turbopack](https://turbo.build/pack)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Geertvdc/zure-vibecoding.git
cd zure-vibecoding
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues
- `npm run lint:fix` - Fix auto-fixable ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted
- `npm run type-check` - Run TypeScript type checking
- `npm run check` - Run all checks (type-check, lint, format)

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── avatar.tsx
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── dashboard.tsx        # Main dashboard component
└── lib/
    └── utils.ts             # Utility functions
```

## Development

### Code Quality

This project uses several tools to maintain code quality:

- **ESLint**: For code linting and catching potential issues
- **Prettier**: For consistent code formatting
- **TypeScript**: For type safety and better developer experience

Run the quality checks:

```bash
npm run check
```

### Styling

The project uses Tailwind CSS with a custom design system based on shadcn/ui. CSS variables are defined in `src/app/globals.css` and can be customized for theming.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 🚀 PR Preview System

This repository automatically creates preview deployments for every Pull Request, allowing you to visually verify changes before merging.

**How it works:**

- 📝 When you open a PR, GitHub Actions automatically builds and deploys a preview
- 🔗 A comment appears on your PR with a unique preview link
- 🔄 The preview updates automatically when you push new commits
- 🧹 Previews are automatically cleaned up when PRs are closed/merged

**Preview URL format:**

```
https://geertvdc.github.io/zure-vibecoding/pr-{PR_NUMBER}/
```

**What gets tested:**

- ✅ Application builds successfully
- ✅ All linting and type checks pass
- ✅ Static export works correctly
- ✅ UI changes are visually verifiable

This system ensures every change can be reviewed and tested before it reaches the main branch!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
