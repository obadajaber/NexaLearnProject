import Link from "next/link";

export default function CourseCard({ course }) {
  // TODO: Build your CourseCard component here
  return (
    <div className="course-card">
      {/* TODO: Display course icon, category, title, description, instructor, and link to /courses/[courseId] */}
      <div className="course-card-top-row">
        <span className="course-icon">{course.icon}</span>
        <span className="course-category-label">{course.category}</span>
      </div>

      <h3 className="course-card-title">{course.title}</h3>
      <p className="course-card-desc">{course.description}</p>

      <div className="course-card-meta">
        <span className="course-meta-item">👤 {course.instructor}</span>
        <span className="course-meta-item">⏱ {course.duration}</span>
        <span className="course-meta-item">📊 {course.level}</span>
      </div>

      <Link href={`/courses/${course.id}`} className="btn btn-outline btn-full">
        View Course & Tasks →
      </Link>
    </div>
  );
}
