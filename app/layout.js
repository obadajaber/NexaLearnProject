import "./globals.css";
import TaskProvider from "@/components/TaskProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "NexaLearn",
  description: "Student Course & Task Management Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* TODO: Add TaskProvider, Navbar, Footer */}
        {/* TaskProvider wraps everything so any page/component can read
            the shared task list through the useTasks() hook. */}
        <TaskProvider>
          <Navbar />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </TaskProvider>
      </body>
    </html>
  );
}
