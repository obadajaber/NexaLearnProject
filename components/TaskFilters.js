"use client";

export default function TaskFilters({
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  courseFilter,
  setCourseFilter,
  courses = [],
  onReset,
}) {
  // TODO: Build your Status, Priority, and Course filter UI here
  const statusOptions = ["all", "pending", "completed"];

  return (
    <div className="filters-container">
      {/* TODO: Add filter buttons & select dropdowns */}
      <div className="filter-group">
        <span className="filter-label">Status</span>
        <div className="filter-buttons">
          {statusOptions.map((status) => (
            <button
              key={status}
              type="button"
              className={`filter-btn ${statusFilter === status ? "active" : ""}`}
              onClick={() => setStatusFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <span className="filter-label">Priority</span>
        <select
          className="filter-select"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="all">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className="filter-group">
        <span className="filter-label">Course</span>
        <select
          className="filter-select"
          value={courseFilter}
          onChange={(e) => setCourseFilter(e.target.value)}
        >
          <option value="all">All Courses</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
      </div>

      <button type="button" className="btn btn-ghost btn-sm" onClick={onReset}>
        Reset Filters
      </button>
    </div>
  );
}
