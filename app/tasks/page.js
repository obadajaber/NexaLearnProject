"use client";

import { useState } from "react";
import Link from "next/link";
import { useTasks } from "@/context/TaskContext";
import { courses } from "@/data/courses";
import SearchBar from "@/components/SearchBar";
import TaskFilters from "@/components/TaskFilters";
import TaskCard from "@/components/TaskCard";

export default function TasksPage() {
  // TODO: Connect to TaskContext, SearchBar, TaskFilters, and TaskCard list
  const { tasks, toggleTask, deleteTask } = useTasks();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [courseFilter, setCourseFilter] = useState("all");

  function handleResetFilters() {
    setStatusFilter("all");
    setPriorityFilter("all");
    setCourseFilter("all");
    setSearchTerm("");
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || task.status === statusFilter;
    const matchesPriority =
      priorityFilter === "all" || task.priority === priorityFilter;
    const matchesCourse =
      courseFilter === "all" || task.courseId === courseFilter;

    return matchesSearch && matchesStatus && matchesPriority && matchesCourse;
  });

  return (
    <div className="container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Task Manager</h1>
          <p className="page-subtitle">
            Track, filter, and manage all of your course assignments.
          </p>
        </div>
        <div className="page-header-actions">
          <Link href="/tasks/new" className="btn btn-primary">
            + New Task
          </Link>
        </div>
      </div>

      <div className="search-margin">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search tasks by title..."
        />
      </div>

      <TaskFilters
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        courseFilter={courseFilter}
        setCourseFilter={setCourseFilter}
        courses={courses}
        onReset={handleResetFilters}
      />

      {filteredTasks.length > 0 ? (
        <div className="list-margin">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              courses={courses}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">📝</div>
          <h3>No tasks match your filters</h3>
          <p className="text-muted">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
