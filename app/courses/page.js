"use client";

import { useState } from "react";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import SearchBar from "@/components/SearchBar";

// Build the list of category filter buttons from the course data itself,
// so we don't have to hardcode categories by hand.
const categories = ["all", ...new Set(courses.map((course) => course.category))];

export default function CoursesPage() {
  // TODO: Implement Course list, SearchBar, and Category Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      categoryFilter === "all" || course.category === categoryFilter;

    const search = searchTerm.toLowerCase();
    const matchesSearch =
      course.title.toLowerCase().includes(search) ||
      course.instructor.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Course Catalog</h1>
          <p className="page-subtitle">
            Explore modules designed to take you from web fundamentals to modern React &amp; Next.js.
          </p>
        </div>
      </div>

      <div className="filters-container">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search courses, instructors, topics..."
        />

        <div className="filter-group">
          <span className="filter-label">Category</span>
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-btn ${categoryFilter === category ? "active" : ""}`}
                onClick={() => setCategoryFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="cards-grid">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>No courses match your search</h3>
          <p className="text-muted">Try a different keyword or category.</p>
        </div>
      )}
    </div>
  );
}
