"use client";
import React from "react";
import ScrollLoadingBar from "../../components/ui/ScrollLoadingBar";
import SlideUpFooter from "../../components/ui/SlideUpFooter";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function MaseCaseStudy() {
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
                    <h1 className="text-3xl sm:text-4xl font-bold text-green-300 mb-2">Case Study: Mase – Hospital Management System</h1>
                    <h2 className="text-xl text-green-400">Streamlining Healthcare Operations with AI & Automation</h2>
                </header>

                <div className="w-full mb-2">
                    <Image src="/images/mase/mase.jpg" alt="Mase Hospital Management System" width={900} height={300} className="w-full h-auto rounded shadow-lg object-cover" />
                </div>

                <div className="flex gap-4 mb-4">
                    <a href="https://mase-ai-intaligence.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300 ml-auto flex items-center gap-2">
                        <ExternalLink size={24} strokeWidth={2} />
                        <span className="text-sm font-mono">Live Demo</span>
                    </a>
                </div>

                <div className="mb-10 text-green-400 font-mono text-sm">
                    <span className="font-semibold">Role:</span> Full Stack Developer
                </div>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-green-300 mb-2">Introduction</h3>
                    <h4 className="text-lg font-semibold text-green-400 mb-1">Background</h4>
                    <p className="mb-2 text-gray-300">
                        Mase is a comprehensive Hospital Management System designed for a healthcare agency to accommodate multiple user roles including patients, nurses, doctors, and HR staff. The platform was built to allow seamless coordination across departments and improve overall communication within the organization.
                    </p>
                    <h4 className="text-lg font-semibold text-green-400 mb-1">Problem</h4>
                    <p className="mb-2 text-gray-300">
                        The agency faced challenges with manual workloads and uncoordinated operations between departments. There was a need to streamline hospital operations by automating appointment scheduling, patient data management, staff monitoring, and performance tracking.
                    </p>
                </section>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-green-300 mb-2">Key Features</h3>
                    <ul className="list-disc list-inside pl-4 mb-2 text-gray-300">
                        <li><strong>Role-Based Access Control:</strong> Distinct interfaces and permissions for patients, nurses, doctors, and HR staff.</li>
                        <li><strong>Automated Scheduling:</strong> Streamlined appointment booking and management to reduce administrative overhead.</li>
                        <li><strong>Staff Monitoring & Performance Tracking:</strong> Tools for HR to monitor staff activities and evaluate performance.</li>
                        <li><strong>AI-Powered Document Analysis:</strong> Integrated OpenAI to analyze patient PDF files for efficient insight extraction while maintaining HIPAA compliance.</li>
                        <li><strong>Secure Data Management:</strong> Utilized Supabase as the database solution for robust security and scalability.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-green-300 mb-2">Methodology</h3>
                    <p className="text-gray-300 mb-2">
                        My development workflow began with in-depth discussions with the client to identify core problems and goals. I provided reference web designs to determine the visual direction matching their brand. Once aligned, I created a Figma draft outlining the layout and content structure to ensure a clear design flow before proceeding to development. The system was then built using Next.js and React, integrating Supabase for the backend and OpenAI for advanced data processing features.
                    </p>
                </section>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-green-300 mb-2">Outcome</h3>
                    <p className="text-gray-300 mb-2">
                        The implementation of Mase significantly reduced the manual workload for the healthcare agency staff. It improved overall communication within the organization and provided a secure, efficient way to manage patient data and hospital operations, ultimately supporting better decision-making within the healthcare workflow.
                    </p>
                </section>

                <div className="mt-12 text-center">
                    <p className="text-gray-400 text-xs italic">
                        Confidential project - limited details available publicly
                    </p>
                </div>
            </main>
            <SlideUpFooter />
        </>
    );
}
