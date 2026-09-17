import Link from "next/link";
import { courses } from "@/data/courses";
import TaskForm from "@/components/TaskForm";

export default function NewTaskPage() {
  return (
    <div className="container">
      <Link href="/tasks" className="btn btn-ghost btn-sm page-back-btn">
        ← Back to Tasks
      </Link>
      <div className="page-title-center">
        <h1 className="page-title">Add New Assignment</h1>
        <p className="page-subtitle">Fill in the details below to add a new task to your tracker.</p>
      </div>
      {/* TODO: Render TaskForm component here */}
      <TaskForm courses={courses} />
    </div>
  );
}
