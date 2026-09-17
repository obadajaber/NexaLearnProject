"use client";

/*
  DashboardTaskSection is a Client Component.
  It reads from TaskContext to display the hero actions, task stats, and
  upcoming tasks. The course count (from static data) is passed in as a
  prop from app/page.js, which is a Server Component.
*/

import Link from "next/link";
import { useTasks } from "@/context/TaskContext";
import { getUpcomingTasks } from "@/lib/helpers";
import { courses } from "@/data/courses";
import StatsCard from "@/components/StatsCard";
import TaskCard from "@/components/TaskCard";

export default function DashboardTaskSection() {
  const { tasks, toggleTask, deleteTask } = useTasks();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === "completed").length;
  const pendingTasks = tasks.filter((task) => task.status === "pending").length;
  const overdueTasks = tasks.filter(
    (task) => task.status === "pending" && new Date(task.dueDate) < new Date()
  ).length;
  const completionRate =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const upcomingTasks = getUpcomingTasks(tasks);

  return (
    <>
      {/* Hero banner */}
      <div className="hero-banner">
        <h1 className="dashboard-hero-title">Welcome back to NexaLearn 🚀</h1>
        <p className="dashboard-hero-subtitle">
          Track your course progression, organize your assignments, and discover
          curated frontend learning resources all in one place.
        </p>
        <div className="hero-actions">
          <Link href="/tasks/new" className="btn btn-primary">
            + Create New Task
          </Link>
          <Link href="/courses" className="btn btn-hero-secondary">
            Explore Courses
          </Link>
        </div>
      </div>

      {/* Stats grid */}
      <div className="stats-grid">
        <StatsCard
          title="Total Tasks"
          value={totalTasks}
          icon="📄"
          colorVariant="primary"
          subtitle="All assigned tasks"
        />
        <StatsCard
          title="Completed"
          value={completedTasks}
          icon="✅"
          colorVariant="success"
          subtitle={`${completionRate}% completion rate`}
        />
        <StatsCard
          title="Pending"
          value={pendingTasks}
          icon="⏳"
          colorVariant="warning"
          subtitle="Tasks in progress"
        />
        <StatsCard
          title="Overdue"
          value={overdueTasks}
          icon="⚠️"
          colorVariant="danger"
          subtitle="Needs attention"
        />
      </div>

      {/* Upcoming tasks section */}
      <section aria-labelledby="upcoming-heading">
        <div className="page-header dashboard-upcoming-header">
          <div>
            <h2 id="upcoming-heading" className="dashboard-upcoming-title">
              ⏰ Upcoming Deadlines (Next 7 Days)
            </h2>
            <p className="dashboard-upcoming-subtitle">
              Stay on top of your upcoming course milestones.
            </p>
          </div>
          <Link href="/tasks" className="btn btn-ghost btn-sm">
            View All Tasks →
          </Link>
        </div>

        {upcomingTasks.length === 0 ? (
          <div className="card">
            <p className="text-muted">🎉 No tasks due in the next 7 days!</p>
          </div>
        ) : (
          <div className="list-margin">
            {upcomingTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                courses={courses}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
