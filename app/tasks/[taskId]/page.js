"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useTasks } from "@/context/TaskContext";
import { courses } from "@/data/courses";
import { formatDate, getPriorityClass, getCourseTitle, isOverdue } from "@/lib/helpers";

// TODO: Connect to TaskContext, display task info, toggle status, and delete
// This page needs to read live task data (and toggle/delete it), which only
// works in a Client Component, so we use the useParams() hook instead of
// the server-only `params` prop to get the dynamic route segment.
export default function TaskDetailPage() {
  const { taskId } = useParams();
  const router = useRouter();
  const { tasks, toggleTask, deleteTask } = useTasks();

  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return (
      <div className="container status-screen">
        <div className="status-icon">🔍</div>
        <h2 className="status-title">Task Not Found</h2>
        <p className="status-desc">
          This task may have already been deleted or never existed.
        </p>
        <Link href="/tasks" className="btn btn-primary">
          Back to Tasks
        </Link>
      </div>
    );
  }

  const isCompleted = task.status === "completed";
  const overdue = isOverdue(task);

  function handleDelete() {
    deleteTask(task.id);
    router.push("/tasks");
  }

  return (
    <div className="container task-detail-container">
      <Link href="/tasks" className="btn btn-ghost btn-sm page-back-btn">
        ← Back to Tasks
      </Link>

      <div className="card task-detail-card">
        <div className="task-detail-header-row">
          <div className="task-detail-badges">
            <span className={`badge ${getPriorityClass(task.priority)}`}>
              {task.priority} priority
            </span>
            <span className={`badge ${isCompleted ? "badge-done" : "badge-pending"}`}>
              {task.status}
            </span>
            {overdue && <span className="badge priority-high">overdue</span>}
          </div>
          <span className="task-detail-id">ID: {task.id}</span>
        </div>

        <h1 className="task-detail-title">{task.title}</h1>

        <div className="task-meta-grid">
          <div>
            <span className="task-meta-label">Course</span>
            <Link
              href={`/courses/${task.courseId}`}
              className="task-meta-course-link"
            >
              {getCourseTitle(courses, task.courseId)} →
            </Link>
          </div>
          <div>
            <span className="task-meta-label">Due Date</span>
            <span className={`task-meta-value ${overdue ? "overdue-text" : ""}`}>
              📅 {formatDate(task.dueDate)}
            </span>
          </div>
          <div>
            <span className="task-meta-label">Status</span>
            <span className="task-meta-value">
              {isCompleted ? "✅ Completed" : "⏳ In Progress"}
            </span>
          </div>
        </div>

        <div className="task-detail-body">
          <h3 className="task-section-title">Task Details &amp; Instructions</h3>
          <p className="task-detail-text">{task.description}</p>
        </div>

        <div className="task-detail-actions">
          <button
            type="button"
            className={isCompleted ? "btn btn-outline" : "btn btn-primary"}
            onClick={() => toggleTask(task.id)}
          >
            {isCompleted ? "↺ Mark as Incomplete" : "✓ Mark as Completed"}
          </button>
          <button
            type="button"
            className="task-detail-delete-link"
            onClick={handleDelete}
          >
            🗑️ Delete Task
          </button>
        </div>
      </div>
    </div>
  );
}
