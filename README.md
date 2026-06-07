<div align="center">

<br/>

<!-- Logo / Banner -->
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&duration=3000&pause=1000&color=3B82F6&center=true&vCenter=true&width=700&lines=NRB+School;Canadian+Virtual+School+Platform;Learn.+Grow.+Achieve." alt="NRB School" />

<br/>

<p align="center">
  <strong>A comprehensive, production-grade Canadian Virtual School platform — built with Next.js 16, React 19, and a powerful modern stack.</strong>
</p>

<br/>

<!-- Badges -->
<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white&style=for-the-badge" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black&style=for-the-badge" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white&style=for-the-badge" alt="TypeScript" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white&style=for-the-badge" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Auth-Clerk-6C47FF?logo=clerk&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/Storage-UploadThing-F97316?style=flat-square" />
  <img src="https://img.shields.io/badge/Animations-Framer_Motion-FF0055?logo=framer&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/Forms-React_Hook_Form_+_Zod-EC4899?style=flat-square" />
  <img src="https://img.shields.io/badge/Email-Nodemailer-0078D4?style=flat-square" />
</p>

</div>

---

## 📖 Table of Contents

- [✨ Overview](#-overview)
- [🌟 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [⚙️ Environment Variables](#️-environment-variables)
- [📦 Scripts](#-scripts)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)

---

## ✨ Overview

**NRB School** is a full-featured, premium virtual school platform designed to meet the rigorous standards of the Canadian online education system. It provides everything a modern digital school needs — from secure student authentication and interactive dashboards to course management, certificate generation, and email notifications — all wrapped in a beautiful, accessible, and fully responsive UI.

> 🎓 **Purpose-built for educators and learners** — enabling seamless online education delivery at scale.

---

## 🌟 Features

### 🔐 Authentication & Security
- **Enterprise-grade Auth** via [Clerk](https://clerk.dev/) — SSO, MFA, role-based access control
- **Protected Routes** — server-side and client-side route guards
- **Session Management** — auto token refresh, secure cookie handling

### 📊 Dashboards & Analytics
- **Interactive Charts** with [Chart.js](https://www.chartjs.org/) and [Recharts](https://recharts.org/)
- **Progress Tracking** — circular progress bars, completion stats
- **Real-time Data Visualization** — student performance, enrollment metrics

### 📚 Course & Content Management
- **Rich Text Editor** powered by [Tiptap](https://tiptap.dev/) — full formatting, media embed, code blocks
- **Structured Course Builder** — modules, lessons, quizzes
- **Content Versioning** — draft and publish workflows

### 🏆 Certificates & Verification
- **Automated PDF Generation** using [jsPDF](https://github.com/parallax/jsPDF) + [html2canvas](https://html2canvas.hertzen.com/)
- **QR Code Verification** via [qrcode.react](https://github.com/zpao/qrcode.react) — tamper-proof, publicly verifiable certificates
- **Custom Certificate Templates** — school-branded designs

### 📁 File & Media Management
- **Secure File Uploads** via [UploadThing](https://uploadthing.com/) — images, PDFs, videos
- **Assignment Submission** — file-based student submissions
- **Resource Library** — downloadable course materials

### 💅 UI / UX
- **Pixel-perfect Design** — built with [Tailwind CSS](https://tailwindcss.com/) and [Radix UI](https://www.radix-ui.com/)
- **Fluid Animations** — micro-interactions and page transitions via [Framer Motion](https://www.framer.com/motion/)
- **Fully Responsive** — optimized for desktop, tablet, and mobile
- **Accessible** — WCAG-compliant components, keyboard navigation, ARIA roles
- **Dark Mode Ready** — system-aware color scheme support

### 📋 Forms & Validation
- **Type-safe Forms** with [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Client & Server Validation** — consistent schema across layers
- **Error Handling** — inline field-level error feedback

### 📧 Communication
- **Email Notifications** via [Nodemailer](https://nodemailer.com/) — enrollment confirmations, alerts, reports
- **Toasts & In-App Alerts** — real-time feedback with [React Hot Toast](https://react-hot-toast.com/)

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|---|---|---|
| **Framework** | Next.js | `^16` |
| **UI Library** | React | `^19` |
| **Language** | TypeScript | `^6` |
| **Styling** | Tailwind CSS | `^3` |
| **Component Library** | Radix UI | Latest |
| **Animations** | Framer Motion | `^12` |
| **Database** | MongoDB + Mongoose | `^9` |
| **Authentication** | Clerk | `^7` |
| **File Storage** | UploadThing | `^7` |
| **Rich Text Editor** | Tiptap | `^3` |
| **Forms** | React Hook Form + Zod | Latest |
| **Charts** | Chart.js + Recharts | Latest |
| **PDF Generation** | jsPDF + html2canvas | Latest |
| **QR Codes** | qrcode.react | Latest |
| **Email** | Nodemailer | `^8` |
| **HTTP Client** | Axios | `^1` |
| **Icons** | Lucide React + React Icons | Latest |
| **Carousel** | Embla Carousel | `^8` |
| **Date Handling** | date-fns | `^4` |

---

## 📁 Project Structure

```
nrb-visible-school/
├── app/
│   ├── (auth)/            # Authentication routes (login, register)
│   ├── (root)/            # Public-facing pages (landing, about)
│   ├── api/               # Next.js API routes (REST endpoints)
│   ├── dashboard/         # Protected student/admin dashboards
│   ├── maintenance/       # Maintenance mode page
│   ├── globals.css        # Global styles & Tailwind directives
│   └── layout.tsx         # Root layout with providers
│
├── components/            # Reusable React components
├── constants/             # App-wide constants and configuration
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions, DB connection, helpers
├── public/                # Static assets (images, fonts, icons)
├── types/                 # Global TypeScript type definitions
│
├── .env.example           # Environment variable template
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** `v18.x` or later ([Download](https://nodejs.org/))
- **npm**, **yarn**, or **pnpm** package manager
- A **MongoDB** database (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- Accounts for: [Clerk](https://clerk.dev/), [UploadThing](https://uploadthing.com/)

---

### 1. Clone the Repository

```bash
git clone <repository-url>
cd nrb-visible-school
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure Environment Variables

Copy the example env file and fill in your credentials:

```bash
cp .env.example .env.local
```

> ⚠️ **Never commit `.env.local` to version control.** It contains sensitive secrets.

See the [Environment Variables](#️-environment-variables) section below for full details.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Hot reloading is enabled by default.

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root of the project. Here is a guide to all required variables:

```env
# ─── Clerk Authentication ─────────────────────────────────────────────────────
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...

# Clerk redirect paths
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# ─── Database ─────────────────────────────────────────────────────────────────
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/nrb-school

# ─── UploadThing (File Storage) ───────────────────────────────────────────────
UPLOADTHING_SECRET=sk_live_...
UPLOADTHING_APP_ID=...

# ─── Nodemailer (Email) ───────────────────────────────────────────────────────
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your@email.com
EMAIL_PASS=your-email-password

# ─── App ──────────────────────────────────────────────────────────────────────
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 📦 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with Webpack |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint for code quality checks |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** the repository
2. **Create** your feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'feat: add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

Please follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ by **[ninazmul](mailto:nazmulsaw@gmail.com)**

⭐ If you find this project useful, please give it a star!

</div>
