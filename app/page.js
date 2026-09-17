import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import DashboardTaskSection from "./DashboardTaskSection";

export default function HomePage() {
  return (
    <div className="container">
      {/*
        DashboardTaskSection is a Client Component.
        It reads from TaskContext to display the hero, task stats, and
        upcoming tasks.
      */}
      <DashboardTaskSection />

      {/* --- Enrolled Courses --- */}
      <section className="dashboard-courses-section">
        <div className="page-header">
          <h2 className="dashboard-upcoming-title">Enrolled Courses</h2>
          <a href="/courses" className="btn btn-ghost btn-sm">
            Browse All ({courses.length}) →
          </a>
        </div>
        <div className="cards-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
