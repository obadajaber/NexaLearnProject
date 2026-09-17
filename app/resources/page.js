"use client";

import { useEffect, useState } from "react";

export default function ResourcesPage() {
  // TODO: Fetch resources from /api/resources using useEffect, handle loading/error/success states
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchResources() {
      try {
        const response = await fetch("/api/resources");

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setResources(data.resources);
      } catch (err) {
        setError(err.message || "Something went wrong while loading resources.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchResources();
  }, []);

  return (
    <div className="container">
      <div className="page-title-center">
        <h1 className="page-title">Learning Resources &amp; Articles</h1>
        <p className="page-subtitle">
          Curated web development articles fetched from our internal API route.
        </p>
      </div>

      {isLoading && (
        <div className="status-screen">
          <div className="status-icon-sm">📖</div>
          <p className="text-muted">Loading resources...</p>
        </div>
      )}

      {!isLoading && error && (
        <div className="status-screen">
          <div className="status-icon-sm">⚠️</div>
          <p className="text-danger">{error}</p>
        </div>
      )}

      {!isLoading && !error && (
        <div className="cards-grid">
          {resources.map((resource) => (
            <div key={resource.id} className="card resource-card">
              <div className="resource-card-header">
                <span className="badge badge-category">{resource.tag}</span>
                <span className="resource-read-time">⏱ {resource.readMinutes} min read</span>
              </div>
              <h3 className="resource-card-title">{resource.title}</h3>
              <p className="resource-card-desc">{resource.summary}</p>
              <div className="resource-card-footer">
                <span className="resource-author">By {resource.author}</span>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Read Article ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
