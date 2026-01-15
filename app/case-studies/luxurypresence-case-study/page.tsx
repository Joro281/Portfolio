"use client";
import React from "react";
import ScrollLoadingBar from "../../components/ui/ScrollLoadingBar";
import SlideUpFooter from "../../components/ui/SlideUpFooter";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

export default function LuxuryPresenceCaseStudy() {
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
                    <h1 className="text-3xl sm:text-4xl font-bold text-green-300 mb-2">Case Study: Luxury Presence – Real Estate Web Design</h1>
                    <h2 className="text-xl text-green-400">Elegance meets Functionality in Real Estate Marketing</h2>
                </header>

                <div className="w-full mb-2">
                    <Image src="/images/luxurypresence/luxurypresence.jpg" alt="Luxury Presence Website" width={900} height={300} className="w-full h-auto rounded shadow-lg object-cover" />
                </div>

                <div className="flex gap-4 mb-4">
                    <a href="https://github.com/Joro281/luxury-presence.git" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
                        <Github size={24} strokeWidth={2} />
                    </a>
                    <a href="https://luxury-presence-test.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300 ml-auto flex items-center gap-2">
                        <ExternalLink size={24} strokeWidth={2} />
                        <span className="text-sm font-mono">Live Demo</span>
                    </a>
                </div>

                <div className="mb-10 text-green-400 font-mono text-sm">
                    <span className="font-semibold">Role:</span> Web Builder / Frontend Developer
                </div>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-green-300 mb-2">Assignment Context</h3>
                    <p className="mb-2 text-gray-300">
                        This project was a Web Builder assignment designed to test aptitude, comprehension, resourcefulness, and creativity. The challenge was to revamp the &quot;Home&quot; page of a real estate website within 3 days, ensuring the result was simple, elegant, and professional.
                    </p>
                    <p className="mb-2 text-gray-300">
                        The goal was to improve the design of the current website rather than just copying it, while using all existing content and images.
                    </p>
                </section>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-green-300 mb-2">Design Philosophy</h3>
                    <p className="mb-2 text-gray-300">
                        Given the nature of the real estate market, the design approach focused on <span className="text-green-400">&quot;Premium Elegance&quot;</span>. I aimed to create a user interface that feels luxurious and trustworthy.
                    </p>
                    <ul className="list-disc list-inside pl-4 mb-2 text-gray-300">
                        <li><strong>Visual Polish:</strong> Used clean typography, generous whitespace, and high-quality imagery to convey sophistication.</li>
                        <li><strong>User Experience:</strong> Prioritized a seamless and responsive layout that works perfectly across all devices.</li>
                        <li><strong>Creativity:</strong> Reimagined the layout to be more engaging and modern compared to the reference material.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-green-300 mb-2">Implementation</h3>
                    <p className="text-gray-300 mb-2">
                        The webpage was built as a single-page application using modern frontend technologies. I utilized GSAP and Motion.dev for advanced animations and added parallax designs to enhance visual depth. I also implemented custom CSS for sophisticated styling effects and ensured the structure was semantic and accessible. The final result is a professional-grade landing page that effectively showcases luxury real estate properties.
                    </p>
                </section>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-green-300 mb-2">Outcome</h3>
                    <p className="text-gray-300 mb-2">
                        The outcome of this assignment is currently pending review. The submitted work aims to demonstrate technical proficiency, design sensibility, and the ability to deliver a high-quality product under time constraints.
                    </p>
                </section>

                <div className="mt-12 text-center">
                    <p className="text-gray-400 text-xs italic">
                        Web Builder Assignment for Luxury Presence
                    </p>
                </div>
            </main>
            <SlideUpFooter />
        </>
    );
}
