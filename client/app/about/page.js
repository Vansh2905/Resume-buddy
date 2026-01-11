"use client"
export default function About() {
    return(
        <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] relative overflow-hidden">
            {/* Animated Purple Glows */}
            <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-600/30 blur-3xl rounded-full animate-pulse" />
            <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-fuchsia-600/20 blur-3xl rounded-full animate-pulse" />

            {/* Card */}
            <div className="relative z-10 w-full max-w-2xl p-8 rounded-2xl bg-black/0 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.25)] overflow-hidden">
                {/* Header */}
                <h1 className="text-3xl font-bold text-white text-center mb-2">
                    About Us
                </h1>
                <p className="text-gray-400 text-center mb-6">
                    Learn more about Resume Buddy
                </p>

                {/* Content */}
                <div className="text-gray-300 space-y-4">
                    <p>
                        Resume Buddy is an AI-powered platform designed to help job seekers optimize their resumes for better career opportunities.
                    </p>
                    <p>
                        Our advanced AI technology analyzes your resume against industry standards and job descriptions to provide personalized recommendations for improvement.
                    </p>
                    <p>
                        Whether you're a recent graduate or an experienced professional, Resume Buddy helps you stand out in today's competitive job market.
                    </p>
                </div>
            </div>
        </div>
    )
}