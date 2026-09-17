import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import CourseTasksSection from "./CourseTasksSection";

// TODO: Add generateStaticParams to pre-render all course pages at build time.
export function generateStaticParams() {
  return courses.map((course) => ({
    courseId: course.id,
  }));
}

export default async function CourseDetailPage({ params }) {
  const { courseId } = await params;

  // TODO: Fetch course details, topics, and course-specific tasks with progress bar
  const course = courses.find((c) => c.id === courseId);

  // If no course matches this id, show the local not-found.js page.
  if (!course) {
    notFound();
  }

  return (
    <div className="container">
      <Link href="/courses" className="btn btn-ghost btn-sm page-back-btn">
        ← Back to Courses
      </Link>

      <div className="hero-banner">
        <div className="hero-header-row">
          <span className="hero-header-icon">{course.icon}</span>
          <div>
            <span className="badge badge-category-glass">{course.category}</span>
            <h1 className="hero-title">{course.title}</h1>
          </div>
        </div>
        <p className="hero-subtitle">{course.description}</p>

        <div className="hero-meta-row">
          <div>
            <span className="hero-meta-label">Instructor</span>
            <p className="hero-meta-value">{course.instructor}</p>
          </div>
          <div>
            <span className="hero-meta-label">Duration</span>
            <p className="hero-meta-value">{course.duration}</p>
          </div>
          <div>
            <span className="hero-meta-label">Level</span>
            <p className="hero-meta-value">{course.level}</p>
          </div>
        </div>
      </div>

      <div className="course-detail-layout">
        <div className="card">
          <h3 className="topics-title">📚 What You&apos;ll Learn</h3>
          <ul className="topics-list">
            {course.topics.map((topic, index) => (
              <li key={topic} className="topics-item">
                <span className="topics-number">{index + 1}.</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CourseTasksSection is a Client Component: it reads live task data
            from TaskContext, which page.js (a Server Component) cannot do. */}
        <CourseTasksSection courseId={course.id} courses={courses} />
      </div>
    </div>
  );
}
