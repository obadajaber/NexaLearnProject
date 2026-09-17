import Link from "next/link";

export default function Footer() {
  // TODO: Build your Footer component here
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="logo-brand">
              <div className="logo-icon sm">🎓</div>
              <span className="logo-text">Nexa<span className="logo-accent">Learn</span></span>
            </div>
            <p className="footer-desc">
              The all-in-one learning workspace and task tracker for modern
              frontend development students.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/">Dashboard</Link></li>
              <li><Link href="/courses">All Courses</Link></li>
              <li><Link href="/tasks">Task Manager</Link></li>
              <li><Link href="/resources">Learning Resources</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Capstone Project</h4>
            <ul>
              <li>Next.js 15+ App Router</li>
              <li>React 19 &amp; Context API</li>
              <li>Vanilla CSS System</li>
              <li>LocalStorage Sync</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} NexaLearn. Frontend Web Development Final Project.</p>
          <span className="footer-badge">Built By Obada Jaber</span>
        </div>
      </div>
    </footer>
  );
}
