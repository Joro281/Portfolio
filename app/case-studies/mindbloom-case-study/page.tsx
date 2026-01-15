import React from "react";
import ScrollLoadingBar from "../../components/ui/ScrollLoadingBar";
import SlideUpFooter from "../../components/ui/SlideUpFooter";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, Figma } from "lucide-react";

export default function MindBloomCaseStudy() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-green-300 mb-2">Case Study: MindBloom – Mental Health & Wellness Platform</h1>
          <h2 className="text-xl text-green-400">Building a Comprehensive Mental Health Support System</h2>
        </header>

        <div className="w-full mb-2">
          <Image src="/images/mindbloom/mindbloom_hero.png" alt="MindBloom Platform Hero" width={900} height={300} className="w-full h-auto rounded shadow-lg object-cover" />
        </div>

        <div className="flex gap-4 mb-4">
          <a href="https://www.figma.com/design/mindbloom-design" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Figma size={24} strokeWidth={2} />
          </a>
          <a href="https://github.com/Joro281/MindBloom.git" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Github size={24} strokeWidth={2} />
          </a>
          <a href="https://mind-bloom-ph.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300 ml-auto flex items-center gap-2">
            <ExternalLink size={24} strokeWidth={2} />
            <span className="text-sm font-mono">Live Demo</span>
          </a>
        </div>
        
        <div className="mb-10 text-green-400 font-mono text-sm">
          <span className="font-semibold">Role:</span> Full Stack Developer & UI/UX Designer
        </div>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">Introduction</h3>
          <h4 className="text-lg font-semibold text-green-400 mb-1">Background</h4>
          <p className="mb-2">
            Mental health awareness and support systems are crucial in today&apos;s fast-paced world. MindBloom was developed to provide a comprehensive platform for mental health support, featuring mood tracking, meditation guides, journaling capabilities, and professional resources. The platform aims to make mental health resources accessible and user-friendly for people of all ages.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">Objectives</h3>
          <ul className="list-disc list-inside pl-4 mb-2">
            <li>Create an intuitive mental health and wellness platform</li>
            <li>Implement mood tracking and analytics features</li>
            <li>Develop guided meditation and mindfulness exercises</li>
            <li>Build a secure journaling system with privacy controls</li>
            <li>Integrate professional mental health resources and referrals</li>
            <li>Ensure accessibility and responsive design across all devices</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">Methodology</h3>
          <p className="text-gray-300 mb-2">
            MindBloom was built using Next.js and React for the frontend with a focus on user experience and accessibility. The current implementation is a comprehensive frontend application that demonstrates modern UI/UX principles with a calming color palette and intuitive navigation. The design prioritizes user-friendly interfaces and responsive design across all devices.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">More Details Coming Soon</h3>
          <p className="text-gray-400">This case study is still in progress. Please check back later for updates and in-depth analysis.</p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">Recommendations</h3>
          <ul className="list-disc list-inside pl-4 mb-2">
            <li>Implement backend API development with Node.js and Express</li>
            <li>Add database integration with MongoDB for data persistence</li>
            <li>Develop user authentication and secure data handling</li>
            <li>Create AI-powered mental health insights and recommendations</li>
            <li>Build real-time mood tracking and analytics features</li>
            <li>Develop mobile app versions for iOS and Android</li>
            <li>Integrate with wearable devices for automatic mood tracking</li>
            <li>Add telehealth integration for direct professional consultation</li>
          </ul>
        </section>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-xs italic">
            For more information, check out the links above
          </p>
        </div>
      </main>
      <SlideUpFooter />
    </>
  );
}
