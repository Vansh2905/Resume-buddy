"use client";

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [jd, setJd] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    const allowed = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowed.includes(selected.type)) {
      setError("Only PDF or DOCX files are allowed.");
      setFile(null);
      return;
    }

    setError("");
    setFile(selected);
  };

  const handleSubmit = async () => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("jd_text", jd);

    await fetch("/api/analyze", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] relative overflow-hidden">
      {/* Animated Purple Glows */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-600/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-fuchsia-600/20 blur-3xl rounded-full animate-pulse" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-lg p-8 rounded-2xl bg-black/0 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.25)] overflow-hidden">
        {/* Scan animation overlay */}
        {loading && (
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute w-full h-1 bg-gradient-to-r 
                            from-transparent via-purple-500 to-transparent
                            animate-scan"
            />
          </div>
        )}

        {/* Header */}
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          AI Resume Analyzer
        </h1>
        <p className="text-gray-400 text-center mb-6">
          Intelligent resume insights powered by AI
        </p>

        {/* Upload */}
        <label className="block border border-dashed border-purple-400/40 rounded-xl p-6 text-center cursor-pointer hover:border-purple-400 transition">
          <input
            type="file"
            accept=".pdf,.docx"
            className="hidden"
            onChange={handleFileChange}
          />

          {file ? (
            <p className="text-white font-medium">{file.name}</p>
          ) : (
            <p className="text-gray-300">
              Click to upload or drag & drop
              <br />
              <span className="text-sm text-gray-400">PDF or DOCX</span>
            </p>
          )}
        </label>

        {/* Error */}
        {error && <p className="text-sm text-red-400 mt-2">{error}</p>}

        {/* Job Description */}
        <textarea className="w-full mt-4 p-3 rounded-xl bg-black/40 text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          rows={4}
          placeholder="Paste job description (optional)"
          value={jd}
          onChange={(e) => setJd(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={!file || loading}
          className={`w-full mt-5 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition
            ${
              loading || !file
                ? "bg-gray-700 text-gray-400"
                : "bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
            }`}
        >
          {loading ? (
            <>
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Analyzing
            </>
          ) : (
            "Analyze Resume"
          )}
        </button>
      </div>
    </div>
  );
}
