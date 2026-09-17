import { NextResponse } from "next/server";

// A small fallback list, used only if the external API request fails.
// This way the Resources page still has something useful to show.
const fallbackResources = [
  {
    id: "fallback-1",
    title: "MDN Web Docs: JavaScript Guide",
    summary: "The official, most complete reference for the JavaScript language.",
    tag: "javascript",
    readMinutes: 6,
    author: "MDN",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
  },
  {
    id: "fallback-2",
    title: "React Documentation",
    summary: "Learn the fundamentals of React straight from the official docs.",
    tag: "react",
    readMinutes: 5,
    author: "react.dev",
    url: "https://react.dev/learn",
  },
  {
    id: "fallback-3",
    title: "Next.js App Router Docs",
    summary: "Everything about layouts, routing, and Server/Client Components in Next.js.",
    tag: "nextjs",
    readMinutes: 7,
    author: "nextjs.org",
    url: "https://nextjs.org/docs/app",
  },
];

// TODO: Fetch articles or return fallback resource array as JSON
export async function GET() {
  try {
    // Fetch top web development & JavaScript articles from Dev.to.
    const response = await fetch(
      "https://dev.to/api/articles?per_page=12&tag=javascript"
    );

    if (!response.ok) {
      throw new Error(`External API responded with status ${response.status}`);
    }

    const articles = await response.json();

    // Transform Dev.to articles into our own simple "learning resource" shape,
    // so the Resources page doesn't need to know anything about Dev.to's format.
    const resources = articles.map((article) => ({
      id: article.id,
      title: article.title,
      summary: article.description || "No description available for this article.",
      tag: article.tag_list?.[0] || "Article",
      readMinutes: article.reading_time_minutes || 5,
      author: article.user?.name || "Unknown Author",
      url: article.url,
    }));

    return NextResponse.json({ resources });
  } catch (error) {
    // If the external API is down or fails, fall back to a small static list
    // instead of showing the student a broken page.
    console.error("Failed to fetch resources:", error.message);
    return NextResponse.json({ resources: fallbackResources });
  }
}
