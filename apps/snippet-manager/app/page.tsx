"use client";

import { Button } from "@geniusgarage/ui/button";
import { SnippetCard } from "@geniusgarage/ui/snippet-card";

interface Snippet {
  id: number;
  title: string;
  language: string;
  code: string;
  tags: string[];
  createdAt: string;
}

const mockSnippets: Snippet[] = [
  {
    id: 1,
    title: "Array Reduce Pattern",
    language: "javascript",
    code: "const sum = arr.reduce((acc, n) => acc + n, 0)",
    tags: ["javascript", "array", "functional"],
    createdAt: "Jan 15, 2026", // Add this
  },
  {
    id: 2,
    title: "React useEffect Cleanup",
    language: "typescript",
    code: `useEffect(() => {
      const timer = setTimeout(() => {}, 1000)
      return () => clearTimeout(timer)
    }, [])`,
    tags: ["react", "hooks", "typescript"],
    createdAt: "Feb 20, 2026", // Add this
  },
  {
    id: 3,
    title: "Promise.all Pattern",
    language: "javascript",
    code: "const results = await Promise.all(promises.map(p => p()))",
    tags: ["javascript", "async", "promises"],
    createdAt: "Mar 10, 2026", // Add this
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">My Snippets</h1>
          <Button onClick={() => console.log("Create snippet")}>
            + New Snippet
          </Button>
        </div>

        {/* Snippet Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockSnippets.map((snippet) => (
            <SnippetCard
              key={snippet.id}
              title={snippet.title}
              language={snippet.language}
              code={snippet.code}
              tags={snippet.tags}
              createdAt={snippet.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
