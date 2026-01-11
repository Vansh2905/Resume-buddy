import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] relative overflow-hidden">
      {/* Animated Purple Glows */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-600/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-fuchsia-600/20 blur-3xl rounded-full animate-pulse" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-lg p-8 rounded-2xl bg-black/0 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.25)] overflow-hidden">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Resume Buddy
        </h1>
        <p className="text-gray-400 text-center mb-6">
          AI-powered resume analysis and improvement
        </p>

        {/* Content */}
        <div className="text-center space-y-4">
          <p className="text-gray-300">
            Get intelligent insights and recommendations to improve your resume with our AI-powered analyzer.
          </p>
          
          <Link href="/upload">
            <button className="w-full mt-5 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition">
              Start Analysis
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
