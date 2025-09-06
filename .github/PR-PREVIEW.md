# PR Preview System

This document explains how the automated PR preview system works for the Business Stalker application.

## Overview

The PR preview system automatically creates deployments for every Pull Request, allowing visual verification of changes before merging to the main branch.

## How It Works

### 1. Automatic Deployment (`pr-preview.yml`)

When you create or update a Pull Request:

1. **Build Process**: The workflow builds the Next.js application with static export
2. **Preview Creation**: Creates a unique subdirectory for the PR (`/pr-{number}/`)
3. **GitHub Pages**: Deploys to GitHub Pages with the preview
4. **PR Comment**: Automatically comments on the PR with the preview link

### 2. Automatic Cleanup (`cleanup-preview.yml`)

When a Pull Request is closed or merged:

1. **Directory Removal**: Removes the PR-specific preview directory
2. **Index Update**: Updates the main preview index page
3. **Cleanup Comment**: Notifies that the preview has been cleaned up

### 3. Initial Setup (`setup-pages.yml`)

Sets up GitHub Pages when the workflow files are first added to the repository.

## Configuration

### Next.js Configuration

The application is configured for static export in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
};
```

### Required Permissions

The workflows require the following GitHub permissions:

- `contents: read` - Read repository content
- `pages: write` - Deploy to GitHub Pages
- `id-token: write` - GitHub Pages deployment token
- `pull-requests: write` - Comment on PRs

## Usage

### For Contributors

1. **Create a PR**: Open a Pull Request against the `main` branch
2. **Wait for Build**: The workflow will automatically trigger and build your changes
3. **Preview Link**: A comment will appear with your unique preview URL
4. **Test Changes**: Use the preview link to visually verify your changes
5. **Updates**: The preview updates automatically when you push new commits

### For Reviewers

1. **Preview Link**: Click the preview link in the PR comments
2. **Visual Review**: Test the application changes in a real environment
3. **Feedback**: Provide feedback based on the visual verification

## Preview URLs

Preview URLs follow this pattern:

```
https://{owner}.github.io/{repo}/pr-{number}/
```

For this repository:

```
https://geertvdc.github.io/zure-vibecoding/pr-{number}/
```

## Benefits

- ✅ **Visual Verification**: See exactly how changes will look
- ✅ **Automated Testing**: Every PR is built and validated
- ✅ **Easy Sharing**: Share preview links with stakeholders
- ✅ **Quality Assurance**: Catch UI issues before merging
- ✅ **No Manual Setup**: Fully automated deployment and cleanup

## Troubleshooting

### Build Failures

If the preview deployment fails:

1. Check the GitHub Actions logs for build errors
2. Ensure all code quality checks pass (`npm run check`)
3. Verify the application builds locally (`npm run build`)

### Missing Preview Comments

If no preview comment appears:

1. Check that the workflow has proper permissions
2. Verify GitHub Pages is enabled for the repository
3. Check the Actions tab for workflow status

### Preview Not Loading

If the preview link doesn't work:

1. Wait a few minutes for GitHub Pages propagation
2. Check that the workflow completed successfully
3. Verify the files were uploaded to the `gh-pages` branch

## Maintenance

The preview system is self-maintaining:

- **Automatic Updates**: Previews update on new commits
- **Automatic Cleanup**: Old previews are removed when PRs close
- **No Manual Intervention**: Runs entirely through GitHub Actions

## Security

- Previews are publicly accessible (GitHub Pages limitation)
- Only builds code from PRs against the main branch
- No secrets or sensitive data should be included in previews
