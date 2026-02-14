# Contributing to Next.js Template

Thank you for your interest in contributing! This document provides guidelines and instructions for getting started with development.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Install dependencies**: `npm install`
4. **Create a branch**: `git checkout -b feature/my-feature`
5. **Make your changes**
6. **Run tests & checks**: `npm run check`
7. **Commit**: `git commit -m "feat: description"`
8. **Push**: `git push origin feature/my-feature`
9. **Create a Pull Request** on GitHub

## 📋 Development Workflow

### Before You Start

- Read [../docs/DEVELOPMENT_GUIDE.md](../docs/DEVELOPMENT_GUIDE.md) for architecture overview
- Check [../docs/FOLDER_STRUCTURE.md](../docs/FOLDER_STRUCTURE.md) for where to add code
- Review existing patterns in `src/features/user-profile/`

### Running the Project

```bash
# Development
npm run dev

# Type checking
npm run typecheck

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format

# Full checks
npm run check
```

## 📝 Code Standards

### TypeScript

- ✅ Always type your code
- ✅ Use meaningful variable names
- ✅ Add JSDoc comments for complex functions

```typescript
/**
 * Fetches user profile data
 * @param userId - The user ID
 * @returns Promise with user profile
 */
export async function fetchUserProfile(userId: string) {
  // Implementation
}
```

### React Components

- ✅ Prefer functional components
- ✅ Use TypeScript for props typing
- ✅ Keep components small (< 300 lines)
- ✅ Use descriptive component names

```tsx
interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
}

export function UserCard({ user, onEdit }: UserCardProps) {
  return (
    // Component JSX
  );
}
```

### File Organization

- Keep features in `src/features/` with subfolders for components, hooks, services
- Keep shared components in `src/components/`
- Export from `index.ts` files for easier imports

## 🎯 What to Contribute

### Good Contributions

- ✅ Bug fixes
- ✅ New features (discuss first in an issue)
- ✅ Documentation improvements
- ✅ Performance optimizations
- ✅ Test additions
- ✅ Code refactoring
- ✅ Example pages/features

### Before Making Large Changes

- Open an **issue** first
- Discuss the approach
- Wait for feedback

## ✅ Pull Request Checklist

- [ ] Code follows project style
- [ ] `npm run check` passes
- [ ] Tests added (if applicable)
- [ ] Documentation updated
- [ ] Commit messages are clear
- [ ] No console.log debugging code
- [ ] No breaking changes (unless discussed)

## 📖 Commit Message Format

We follow conventional commits:

```
type(scope): subject

body (optional)

footer (optional)
```

### Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style (formatting, missing semicolons, etc)
- `refactor:` - Code refactoring
- `perf:` - Performance improvement
- `test:` - Adding tests
- `chore:` - Maintenance

### Examples

```
feat(api-client): add timeout configuration
fix(user-profile): correct form validation
docs: update GETTING_STARTED guide
refactor(hooks): simplify useFetch implementation
```

## 🧪 Testing

If adding new features, please include tests.

Example test structure:

```typescript
// src/components/__tests__/button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from '../button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

## 🐛 Reporting Bugs

When reporting bugs, include:

1. **Description** - What's the issue?
2. **Steps to reproduce** - How to recreate?
3. **Expected behavior** - What should happen?
4. **Actual behavior** - What actually happens?
5. **Environment** - Node version, OS, browser?

## 📚 Documentation

### Updating Docs

- Update README.md for major changes
- Update docs/DEVELOPMENT_GUIDE.md for technical details
- Add JSDoc comments to functions
- Keep examples up to date

### Writing Good Documentation

- Be clear and concise
- Use code examples
- Include common pitfalls
- Link to related docs

## 🤝 Code Review Process

1. **Author** submits PR
2. **Reviewers** check code quality
3. **Author** addresses feedback
4. **CI/CD** must pass
5. **Maintainer** approves & merges

### Review Comments

- Be respectful and constructive
- Suggest improvements, don't demand
- Explain the "why" behind suggestions
- Acknowledge good work

## 📞 Questions?

- Check existing [issues](https://github.com/krizad/next-template/issues)
- Open a [discussion](https://github.com/krizad/next-template/discussions)
- Read the documentation files in `docs/`

---

Thank you for contributing! 🎉
