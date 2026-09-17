"use client";

import Link from "next/link";
import { formatDate, getPriorityClass, getCourseTitle, isOverdue } from "@/lib/helpers";

export default function TaskCard({ task, courses = [], onToggle, onDelete }) {
  // TODO: Build your TaskCard component here
  const isCompleted = task.status === "completed";
  const overdue = isOverdue(task);

  return (
    <div className={`task-card ${isCompleted ? "completed" : ""} ${overdue ? "overdue-card" : ""}`}>
      {/* TODO: Add completion checkbox, title link, tags, priority badge, and delete button */}
      <div className="task-card-main">
        <button
          type="button"
          className={`checkbox-custom ${isCompleted ? "checked" : ""}`}
          onClick={() => onToggle(task.id)}
          aria-label={isCompleted ? "Mark as pending" : "Mark as complete"}
        >
          {isCompleted ? "✓" : ""}
        </button>

        <div className="task-content">
          <Link href={`/tasks/${task.id}`} className="task-title-link">
            <span className={`task-title ${isCompleted ? "line-through" : ""}`}>
              {task.title}
            </span>
          </Link>
          <p className="task-desc">{task.description}</p>

          <div className="task-tags-row">
            <span className={`badge ${getPriorityClass(task.priority)}`}>
              {task.priority}
            </span>
            <span className="badge badge-course">
              {getCourseTitle(courses, task.courseId)}
            </span>
            <span className="task-due-date">
              📅 {formatDate(task.dueDate)}
              {overdue && <span className="overdue-text"> (Overdue)</span>}
            </span>
            <span className={`badge ${isCompleted ? "badge-done" : "badge-pending"}`}>
              {task.status}
            </span>
          </div>
        </div>
      </div>

      <div className="task-card-actions">
        <Link href={`/tasks/${task.id}`} className="task-details-link">
          Details
        </Link>
        <button
          type="button"
          className="icon-btn-danger"
          onClick={() => onDelete(task.id)}
          aria-label="Delete task"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
