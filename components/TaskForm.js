"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TaskContext";
import { generateId } from "@/lib/helpers";

export default function TaskForm({ courses = [] }) {
  // TODO: Build your controlled TaskForm component here
  // 1. Create state for title, description, courseId, dueDate, priority, error
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [courseId, setCourseId] = useState(courses[0]?.id || "");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");
  const [error, setError] = useState("");

  const { addTask } = useTasks();
  const router = useRouter();

  // 2. Validate inputs on submit
  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !dueDate) {
      setError("Please fill in at least a title and a due date.");
      return;
    }

    // 3. Call addTask() and redirect to '/tasks'
    addTask({
      id: generateId(),
      title: title.trim(),
      description: description.trim(),
      courseId,
      dueDate,
      priority,
      status: "pending",
    });

    router.push("/tasks");
  }

  return (
    <form className="task-form card" onSubmit={handleSubmit}>
      {/* TODO: Add title input, description textarea, course select, dueDate input, priority select, and submit button */}
      {error && <div className="form-error-banner">{error}</div>}

      <div className="form-group">
        <label className="form-label" htmlFor="title">
          Task Title *
        </label>
        <input
          id="title"
          type="text"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Build responsive navbar"
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="description">
          Description (optional)
        </label>
        <textarea
          id="description"
          className="form-textarea"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add any instructions, links, or notes..."
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="courseId">
          Course
        </label>
        <select
          id="courseId"
          className="form-select"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
        >
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="dueDate">
            Due Date *
          </label>
          <input
            id="dueDate"
            type="date"
            className="form-input"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="priority">
            Priority Level
          </label>
          <select
            id="priority"
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="high">🔴 High Priority</option>
            <option value="medium">🟡 Medium Priority</option>
            <option value="low">🟢 Low Priority</option>
          </select>
        </div>
      </div>

      <div className="form-actions">
        <button
          type="button"
          className="btn btn-outline"
          onClick={() => router.push("/tasks")}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save Task
        </button>
      </div>
    </form>
  );
}
