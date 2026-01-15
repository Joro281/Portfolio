import React from "react";
import ScrollLoadingBar from "../../components/ui/ScrollLoadingBar";
import SlideUpFooter from "../../components/ui/SlideUpFooter";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, Figma } from "lucide-react";

export default function BengalsCaseStudy() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-green-300 mb-2">Case Study: Bengals – Premium Seafood Delivery Business</h1>
          <h2 className="text-xl text-green-400">Bridging the Sea&apos;s Bounty from General Santos to Cagayan de Oro</h2>
        </header>

        <div className="w-full mb-2">
          <Image src="/images/bengals/bengals_hero.png" alt="Bengals Seafood Business Hero" width={900} height={300} className="w-full h-auto rounded shadow-lg object-cover" />
        </div>

        <div className="flex gap-4 mb-4">
          <a href="https://www.figma.com/design/bengals-design" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Figma size={24} strokeWidth={2} />
          </a>
          <a href="https://github.com/Joro281/Bengals.git" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Github size={24} strokeWidth={2} />
          </a>
          <a href="https://bengals.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300 ml-auto flex items-center gap-2">
            <ExternalLink size={24} strokeWidth={2} />
            <span className="text-sm font-mono">Live Demo</span>
          </a>
        </div>
        
        <div className="mb-10 text-green-400 font-mono text-sm">
          <span className="font-semibold">Role:</span> Web Developer & UI/UX Designer
        </div>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">Introduction</h3>
          <h4 className="text-lg font-semibold text-green-400 mb-1">Background</h4>
          <p className="mb-2">
            Bengals is a premium seafood delivery business that carries the ocean&apos;s best — freshly caught fish, shrimp, crabs, and other premium seafood — straight from General Santos City. Every catch is carefully handled, packed, and delivered to their trusted partners in Cagayan de Oro, ensuring unmatched freshness and quality. From fishing boats to your kitchen or business, they bridge the sea&apos;s bounty to those who value only the finest. I was tasked with developing a modern website to showcase their business and facilitate online ordering.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">Objectives</h3>
          <ul className="list-disc list-inside pl-4 mb-2">
                               <li>Create a modern, responsive website to showcase Bengals&apos; premium seafood business</li>
            <li>Develop an intuitive online ordering system for business partners</li>
            <li>Implement product catalog with high-quality images and descriptions</li>
            <li>Design user-friendly interface for easy navigation and ordering</li>
            <li>Ensure mobile responsiveness for accessibility across all devices</li>
            <li>Integrate contact forms and communication features for customer inquiries</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">Methodology</h3>
          <p className="text-gray-300 mb-2">
            The website was developed using Next.js and React for optimal performance and SEO. The design process involved understanding the client&apos;s business model and target audience, creating wireframes and prototypes, and implementing a modern, seafood-themed design. The development focused on creating an intuitive user experience that reflects the premium nature of the business while ensuring easy navigation and ordering functionality for business partners.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">More Details Coming Soon</h3>
          <p className="text-gray-400">This case study is still in progress. Please check back later for updates and in-depth analysis.</p>
        </section>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-300 mb-2">Recommendations</h3>
          <ul className="list-disc list-inside pl-4 mb-2">
            <li>Implement advanced online ordering system with real-time inventory</li>
            <li>Add customer portal for order tracking and history</li>
            <li>Integrate payment gateway for seamless transactions</li>
            <li>Develop mobile app for enhanced customer experience</li>
            <li>Add multi-language support for broader market reach</li>
            <li>Implement analytics dashboard for business insights</li>
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
