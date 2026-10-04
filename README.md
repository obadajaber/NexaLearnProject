# NexaLearn 🎓

A full-stack **course and task management dashboard** built for students to track their learning progress, manage assignments, and discover curated web development resources — all in one place.

This project was built as a **Frontend Web Development capstone project**, completed after finishing the Frontend Developer training program with **[Qafza](https://qafza.com)**.

🔗 **Live Demo:** https://nexa-learn-project.vercel.app/
💻 **Repository:** you're looking at it!

---

## ✨ Features

- 📊 **Interactive Dashboard** — live stats (total tasks, completed, pending, overdue) with a completion-rate summary and upcoming deadlines (next 7 days)
- 📚 **Course Catalog** — browse, search, and filter courses by category, with a dedicated detail page per course
- ✅ **Task Manager** — add, complete, and delete assignments with priority levels, due dates, and course linking
- 🔍 **Search & Filters** — real-time search and multi-criteria filtering (status, priority, course) across tasks and courses
- 💾 **Persistent State** — all task data is synced to `localStorage`, so your progress is saved between visits
- 🌐 **Live Learning Resources** — a custom Next.js API route fetches real, up-to-date articles from an external API (Dev.to)
- 📱 **Fully Responsive** — hand-crafted CSS design system that adapts cleanly across desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router, Server & Client Components) |
| UI Library | [React 19](https://react.dev) (Hooks, Context API) |
| Styling | Hand-written Vanilla CSS (custom design system, no UI frameworks) |
| State Management | React Context API + `localStorage` persistence |
| Data Fetching | Next.js Route Handlers + native `fetch` |
| Deployment | [Vercel](https://vercel.com) |

---

## 📂 Project Structure

```
nexalearn/
├── app/
│   ├── page.js                 # Dashboard (Server Component)
│   ├── DashboardTaskSection.js # Live stats & upcoming tasks (Client Component)
│   ├── courses/                # Course catalog + dynamic course detail pages
│   ├── tasks/                  # Task manager, add-task form, task detail pages
│   ├── resources/               # Learning resources (fetched client-side)
│   ├── api/resources/          # Route Handler — fetches live articles
│   └── globals.css             # Complete design system (colors, components, responsive rules)
├── components/                 # Reusable UI components (Navbar, TaskCard, CourseCard, etc.)
├── context/TaskContext.js      # Global task state + localStorage sync
├── data/                       # Seed data (courses & initial tasks)
└── lib/helpers.js              # Shared utility functions
```

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/your-username/nexalearn.git
cd nexalearn

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🧠 What I Learned

- Structuring an app with Next.js's **App Router**, and understanding exactly when to use **Server Components** vs. **Client Components**
- Managing global state with the **Context API**, including syncing it with `localStorage` without causing hydration mismatches
- Building a custom **Next.js Route Handler** to fetch and reshape data from an external REST API
- Designing a complete, responsive **CSS design system from scratch** — without relying on Tailwind or any UI framework

---

## 🙏 Acknowledgements

Built as a capstone project for the Frontend Web Development training program with **[Qafza](https://qafza.com)**.

---

## 👤 Author

**Obada Jaber**
Feel free to connect with me on https://www.linkedin.com/in/obada-jaber-261465404/
