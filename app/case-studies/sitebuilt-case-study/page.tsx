"use client";
import React from "react";
import ScrollLoadingBar from "../../components/ui/ScrollLoadingBar";
import SlideUpFooter from "../../components/ui/SlideUpFooter";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function SiteBuiltCaseStudy() {
    return (
        <>
            <ScrollLoadingBar />
            <main className="p-8 max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200 mb-8"
                    >
                        <span className="mr-2">←</span>
                        <span className="text-sm font-mono">cd ../projects</span>
                    </Link>
                </div>

                <header className="mb-6 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-green-300 mb-2">Case Study: SiteBuilt – Intelligent Construction Documentation</h1>
                    <h2 className="text-xl text-green-400">Automating As-Built Drawings from Site Photos</h2>
                </header>

                <div className="w-full mb-2">
                    <Image src="/images/sitebuilt/sitebuilt.jpg" alt="SiteBuilt Platform" width={900} height={300} className="w-full h-auto rounded shadow-lg object-cover" />
                </div>

                <div className="flex gap-4 mb-4">
                    <a href="https://sitebuilt.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300 ml-auto flex items-center gap-2">
                        <ExternalLink size={24} strokeWidth={2} />
                        <span className="text-sm font-mono">Live Demo</span>
                    </a>
                </div>

                <div className="mb-10 text-green-400 font-mono text-sm">
                    <span className="font-semibold">Role:</span> Frontend Developer
                </div>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-green-300 mb-2">Executive Summary</h3>
                    <p className="mb-2 text-gray-300">
                        SiteBuilt is an intelligent construction-documentation platform that transforms everyday site photos into photo-verified, accurate As-Built drawings — automatically, and in minutes. It removes the slow, manual process of marking up floor plans and linking photos, offering a streamlined system for Field Engineers, Project Managers, and BIM Teams.
                    </p>
                </section>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-green-300 mb-2">Frontend Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="text-lg font-semibold text-green-400">1. Intuitive Upload Interface</h4>
                            <p>Developed a seamless drag-and-drop zone that handles large floor plan files and multiple site photos simultaneously, giving users immediate visual feedback and validation.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-green-400">2. Interactive Pinning Canvas</h4>
                            <p>Built a responsive, canvas-based mapping tool that allows users to precisely adjust photo pins on the floor plan with smooth drag interactions, zoom capabilities, and real-time coordinate updates.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-green-400">3. Dynamic Report Dashboard</h4>
                            <p>Created a client-side dashboard that compiles processed data into a clean, interactive report, featuring responsive previews and instant export options for PDF and DXF formats.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-green-300 mb-2">Technical Highlights</h3>
                    <ul className="list-disc list-inside pl-4 mb-2 text-gray-300">
                        <li><strong>React & Next.js Architecture:</strong> Utilized a component-based architecture for reusable, maintainable UI elements.</li>
                        <li><strong>Complex State Management:</strong> Managed intricate states for multi-step workflows and large file uploads.</li>
                        <li><strong>Interactive UI Components:</strong> Implemented custom canvas manipulations for precise image mapping and pinning.</li>
                        <li><strong>Responsive Design:</strong> Ensured full functionality across tablets and desktop devices for field usage.</li>
                        <li><strong>Performance Optimization:</strong> Implemented lazy loading and optimized asset handling for heavy media-rich reports.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-green-300 mb-2">Impact & Benefits</h3>
                    <ul className="list-disc list-inside pl-4 mb-2 text-gray-300">
                        <li><strong>Saves Time:</strong> Cuts 30–60% of manual documentation time.</li>
                        <li><strong>Reduces Errors:</strong> Prevents miscommunication and wrong installation assumptions by anchoring photos to exact spots.</li>
                        <li><strong>Improves Visibility:</strong> Provides real-time visual records for project managers and transparent reports for clients.</li>
                        <li><strong>Accessibility:</strong> Easy for field engineers with no CAD skills required.</li>
                    </ul>
                </section>

                <div className="mt-12 text-center">
                    <p className="text-gray-400 text-xs italic">
                        SiteBuilt bridges the gap between site reality and digital documentation.
                    </p>
                </div>
            </main>
            <SlideUpFooter />
        </>
    );
}
