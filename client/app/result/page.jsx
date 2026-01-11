"use client";

import { useState } from "react";
import Link from "next/link";

export default function ResultPage() {
  const [results, setResults] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] relative overflow-hidden">
      {/* Animated Purple Glows */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-600/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-fuchsia-600/20 blur-3xl rounded-full animate-pulse" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-2xl p-8 rounded-2xl bg-black/0 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.25)] overflow-hidden">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Analysis Results
        </h1>
        <p className="text-gray-400 text-center mb-6">
          Your resume analysis is complete
        </p>

        {/* Results Content */}
        <div className="space-y-4">
          {results ? (
            <div className="text-white">
              {/* Display results here */}
              <p>Results will be displayed here...</p>
            </div>
          ) : (
            <div className="text-center text-gray-300">
              <p className="mb-4">No analysis results available.</p>
              <Link href="/upload">
                <button className="bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition">
                  Analyze Resume
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}