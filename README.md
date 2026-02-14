# Next.js 16 Template (App Router)

✨ A production-ready **boilerplate** for kickstarting Next.js projects with feature-based architecture, component reusability, and pre-configured everything.

🎉 **Fully enhanced with 6 interactive demo pages, comprehensive examples, production patterns, and best practices!**

---

## 🚀 Quick Start (3 Steps)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:3000
```

👉 **First time?** Read [GETTING_STARTED.md](docs/GETTING_STARTED.md) for detailed setup & customization.

---

## ✨ What's New - Enhanced Features

### 6 Interactive Demo Pages

| Page                    | URL                | Purpose                                           |
| ----------------------- | ------------------ | ------------------------------------------------- |
| **Components Showcase** | `/components-demo` | See all UI components with examples               |
| **Advanced Modals**     | `/advanced-modals` | Complex modal patterns (notification, wizard, etc)|
| **CRUD Example**        | `/crud-example`    | Complete user management system                  |
| **API Error Demo**      | `/api-error-demo`  | Error handling with 10+ HTTP status codes        |
| **Quick Example**       | `/quick-example`   | Simple best practices example                    |
| **API Sandbox**         | `/api-sandbox`     | Interactive API tester                           |

**Access all demos:** Visit `/demos` or use the quick access buttons

### Enhanced API Routes & Features

- **User Management** - Complete CRUD with validation
- **Pagination & Search** - Built-in pagination support
- **Error Handling** - Comprehensive error patterns with user-friendly messages
- **Input Validation** - Email format, duplicate checking, field validation
- **Real-world Patterns** - Form validation, loading states, Toast notifications

---

## ✅ What's Included

**Core Features**
- ✨ **Feature-based architecture** - Scalable code organization
- 🧩 **UI components** - Button, Input, Card, Modal, Toast (ready to extend)
- 📄 **Example pages** - Dashboard, Profile, 6 interactive demos
- 🔐 **Auth pages** - Login & Register with route groups

**Development Tools**
- 🎣 **Custom hooks** - useLocalStorage, useMediaQuery, useFetch, useModal
- 🧠 **State management** - Zustand store with persistence
- 🌙 **Dark/Light theme** - With anti-flash script to prevent flickering
- 🛠️ **Pre-configured tools** - ESLint, Prettier, TypeScript, Tailwind CSS v4
- 🎯 **API client** - Axios with error handling & interceptors
- 📝 **TypeScript** - Full type safety throughout

**Production Ready**
- 🚀 **Optimized for performance** - Next.js optimizations enabled
- 🔒 **Security best practices** - Proper error handling, input validation
- ♿ **Accessibility** - Semantic HTML, keyboard navigation, ARIA attributes
- 📱 **Responsive design** - Mobile-first with responsive Tailwind utilities

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/               🔐 Auth page route group
│   ├── api/                  📡 API routes
│   ├── components-demo/      🎨 Components showcase
│   ├── advanced-modals/      📦 Advanced modal patterns
│   ├── crud-example/         ⚙️  Full CRUD example
│   ├── api-error-demo/       ⚠️  Error handling demo
│   ├── dashboard/            📊 Dashboard example
│   ├── profile/              👤 Profile feature
│   ├── layout.tsx            🎯 Root layout
│   ├── page.tsx              🏠 Home page
│   └── globals.css           🎨 Global styles

├── components/
│   ├── ui/                   🧩 UI components
│   │   ├── button.tsx
│   │   ├── modal.tsx
│   │   ├── toast.tsx
│   │   └── ...
│   └── common/               🔄 Shared components
│       ├── navbar.tsx
│       ├── footer.tsx
│       └── ...

├── features/
│   ├── auth/                 🔑 Authentication
│   ├── user/                 👥 User management
│   └── user-profile/         📋 User profile feature
│       ├── components/
│       ├── hooks/
│       ├── services/
│       └── types.ts

├── hooks/                    🎣 Custom React hooks
├── lib/                      ⚙️  Utilities & config
│   └── api-client.ts         📡 Axios setup
├── store/                    🧠 Zustand stores
├── types/                    🏷️  TypeScript types
└── utils/                    🛠️  Helper functions
```

**For detailed breakdown** → [FOLDER_STRUCTURE.md](docs/FOLDER_STRUCTURE.md)

---

## 📖 Available Routes

| Route                     | Purpose                              | Type      |
| ------------------------- | ------------------------------------ | --------- |
| `/`                       | Landing page                        | Page      |
| `/components-demo`        | UI components showcase               | Demo      |
| `/advanced-modals`        | Modal patterns                       | Demo      |
| `/crud-example`           | User management CRUD                 | Demo      |
| `/api-error-demo`         | Error handling patterns              | Demo      |
| `/api-sandbox`            | API testing                          | Demo      |
| `/dashboard`              | Dashboard example                    | Page      |
| `/profile`                | User profile                         | Page      |
| `/login`, `/register`     | Authentication                       | Auth      |
| `/api/users`              | User list (GET, POST)                | API       |
| `/api/users/[id]`         | User CRUD (GET, PUT, DELETE)         | API       |
| `/api/test-error`         | Error testing endpoint               | API       |

---

## 🧪 NPM Scripts & Make Commands

| Command                          | Purpose                                        |
| -------------------------------- | ---------------------------------------------- |
| `npm run dev`                    | Start dev server (localhost:3000)              |
| `npm run build`                  | Build for production                           |
| `npm run start`                  | Run production build                           |
| `npm run lint`                   | Check code quality                             |
| `npm run lint:fix`               | Fix linting issues                             |
| `npm run typecheck`              | Check TypeScript types                         |
| `npm run format`                 | Format with Prettier                           |
| `npm run check`                  | Full quality check (lint + typecheck + format) |

**Use Makefile for faster typing:**

```bash
make dev        # npm run dev
make build      # npm run build
make lint-fix   # npm run lint:fix
make check      # npm run check
```

---

## 📦 Tech Stack

| Tool             | Version | Purpose                         |
| ---------------- | ------- | ------------------------------- |
| **Next.js**      | 16      | React framework with App Router |
| **React**        | 19      | Modern UI library               |
| **TypeScript**   | 5       | Type safety                     |
| **Tailwind CSS** | v4      | Utility-first styling           |
| **Zustand**      | 5       | Lightweight state management    |
| **Axios**        | 1.8     | HTTP client with interceptors   |
| **next-themes**  | 0.4     | Dark/Light theme support        |
| **ESLint**       | 9       | Code quality                    |
| **Prettier**     | 3       | Code formatting                 |

---

## 🎨 Customization & Setup

### For New Projects

Run the setup script:

```bash
# macOS/Linux
./setup.sh

# Windows
setup.bat
```

Or manually customize:

1. Update `package.json` name and description
2. Update metadata in `src/app/layout.tsx`
3. Create `.env.local` with your API configuration
4. Customize theme colors in `src/app/globals.css`

→ **[CUSTOMIZATION_GUIDE.md](docs/CUSTOMIZATION_GUIDE.md)** - Detailed customization instructions

### Create New Pages

```bash
# Create a new page
mkdir -p src/app/my-page
# Add src/app/my-page/page.tsx
```

### Create New API Routes

```typescript
// src/app/api/my-endpoint/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ success: true, data: [] });
}

export async function POST(request: Request) {
  const body = await request.json();
  // Your logic here
  return NextResponse.json({ success: true });
}
```

### Create New Features

```bash
mkdir -p src/features/my-feature/{components,hooks,services}
# Add types.ts and index.ts for proper exports
```

---

## 🔧 Environment Variables

Create `.env.local`:

```bash
# Public variables (visible in browser)
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api

# Private variables (server-side only)
# DATABASE_URL=your_database_url
# API_SECRET=your_secret_key
```

---

## 📚 Documentation Hub

| Document                                              | For                          | Time  |
| ----------------------------------------------------- | ---------------------------- | ----- |
| [**GETTING_STARTED.md**](docs/GETTING_STARTED.md)     | 👈 Quick 3-step setup        | 10m   |
| [QUICK_REFERENCE.md](docs/QUICK_REFERENCE.md)         | ⚡ Cheat sheet & snippets     | 5m    |
| [BOILERPLATE_GUIDE.md](docs/BOILERPLATE_GUIDE.md)     | 📚 Complete usage guide       | 20m   |
| [CUSTOMIZATION_GUIDE.md](docs/CUSTOMIZATION_GUIDE.md) | 🎨 Customize for your needs  | 15m   |
| [DEVELOPMENT_GUIDE.md](docs/DEVELOPMENT_GUIDE.md)     | 📖 Advanced patterns         | 20m   |
| [FOLDER_STRUCTURE.md](docs/FOLDER_STRUCTURE.md)       | 🗂️  Deep project breakdown   | 10m   |
| [API_INTEGRATION.md](docs/API_INTEGRATION.md)          | 🔗 API integration patterns  | 15m   |
| [API_ERROR_HANDLING.md](docs/API_ERROR_HANDLING.md)    | ⚠️ Error handling guide      | 10m   |

---

## 🎓 Learning Path

### Day 1 - Getting Started
1. Read [GETTING_STARTED.md](docs/GETTING_STARTED.md) - Setup & run
2. Visit `/components-demo` - See all UI components
3. Try `/quick-example` - Simple use case

### Day 2 - Core Patterns
1. Read [BOILERPLATE_GUIDE.md](docs/BOILERPLATE_GUIDE.md) - Complete guide
2. Explore `/crud-example` - Full CRUD system
3. Study `/api-error-demo` - Error handling patterns

### Day 3 - Advanced Topics
1. Review source code in `src/app/`
2. Check `/advanced-modals` - Complex modal patterns
3. Read [DEVELOPMENT_GUIDE.md](docs/DEVELOPMENT_GUIDE.md) - Advanced patterns

---

## 🌟 Key Features Demonstrated

### Components
- ✅ Buttons (5 variants, 3 sizes, loading state)
- ✅ Modals (5 sizes, scrollable, nested)
- ✅ Toasts (5 variants, auto-dismiss, custom duration)
- ✅ Form inputs & validation
- ✅ Cards & responsive layouts

### API Patterns
- ✅ Create, Read, Update, Delete (CRUD)
- ✅ Pagination & search functionality
- ✅ Input validation & sanitization
- ✅ Error handling with user-friendly messages
- ✅ Proper HTTP status codes (400, 401, 404, 422, 500, etc.)
- ✅ Request/response consistency

### Real-World Patterns
- ✅ CRUD operations (User management)
- ✅ Multi-step forms (Wizard)
- ✅ Confirmation dialogs
- ✅ Form validation & submission
- ✅ Error recovery & retry logic
- ✅ Loading & skeleton states
- ✅ Nested modals with focus management
- ✅ Toast notifications with actions

---

## 🚀 Deployment

### Vercel (Recommended - Zero Config)

```bash
# 1. Push to GitHub
git push origin main

# 2. Connect repo to Vercel
# https://vercel.com/import

# 3. Deploy automatically on push
```

### Docker

```bash
docker build -t my-app .
docker run -p 3000:3000 my-app
```

### Manual Build & Run

```bash
npm run build
npm start
```

---

## ❓ FAQ

**Q: Which package manager should I use?**
A: Any (npm, pnpm, yarn). This template uses npm in examples.

**Q: Can I use this without TypeScript?**
A: Yes, but not recommended. TypeScript provides excellent IDE support and catches errors.

**Q: Is Zustand required?**
A: No, it's optional. You can use Context API or other state management solutions.

**Q: How do I add authentication?**
A: Check [CUSTOMIZATION_GUIDE.md](docs/CUSTOMIZATION_GUIDE.md) - Authentication section.

**Q: How do I connect to a real backend API?**
A: Update `NEXT_PUBLIC_API_BASE_URL` in `.env.local` and modify `lib/api-client.ts`.

**Q: Can I modify the component styles?**
A: Yes! All styles use Tailwind CSS. Edit `src/app/globals.css` for global changes.

---

## 📊 By The Numbers

- **6** interactive demo pages
- **11+** API route examples
- **50+** code examples throughout
- **8+** comprehensive documentation files
- **100+** components & patterns
- **10+** HTTP status codes covered
- **5** toast variants
- **5** modal sizes
- **5** button variants
- **0** configuration required to start!

---

## 🎉 What Makes This Great

### ✅ Complete
- Comprehensive examples for all common tasks
- Production-ready patterns throughout
- Real-world use cases demonstrated

### ✅ Production-Ready
- Full TypeScript type safety
- Proper error handling & user feedback
- Security best practices implemented
- Accessibility features included
- Responsive design by default

### ✅ Well-Documented
- Inline code comments explaining logic
- Multiple example implementations
- Best practices guide included
- API documentation provided
- Component showcase with interaction

### ✅ Easy to Extend
- Clear, organized file structure
- Reusable component patterns
- Copy-paste ready examples
- Consistent code conventions
- Good separation of concerns

---

## 📝 License

Open source. Free for personal & commercial use.

---

## 🤝 Next Steps

1. **Explore** → Visit `/demos` see all interactive examples
2. **Understand** → Read [BOILERPLATE_GUIDE.md](docs/BOILERPLATE_GUIDE.md)
3. **Customize** → Follow [CUSTOMIZATION_GUIDE.md](docs/CUSTOMIZATION_GUIDE.md)
4. **Build** → Create your amazing application!

---

**Happy building! 🚀**

Questions? Check the docs or explore the demo pages for working examples.

