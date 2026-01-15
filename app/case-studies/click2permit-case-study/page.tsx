<<<<<<< HEAD
"use client";
=======
>>>>>>> 74faa704344ad38fe3fb4bf912810f6bae4c7ad1
import React from "react";
import ScrollLoadingBar from "../../components/ui/ScrollLoadingBar";
import SlideUpFooter from "../../components/ui/SlideUpFooter";
import Link from "next/link";
import Image from "next/image";
<<<<<<< HEAD
import { Folder, Github } from "lucide-react";
=======
import { Figma, Folder, Github } from "lucide-react";
>>>>>>> 74faa704344ad38fe3fb4bf912810f6bae4c7ad1

export default function Click2PermitCaseStudy() {
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
<<<<<<< HEAD

        <header className="mb-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-300 mb-2">Case Study: Click2Permit – Online Request System for Human Resource Management Office</h1>
          <h2 className="text-xl text-green-400">Digital Transformation of HR Document Processing</h2>
        </header>

        <div className="w-full mb-2">
          <Image src="/images/click2permit/Project1.jpg" alt="Click2Permit System Hero" width={900} height={300} className="w-full h-auto rounded shadow-lg object-cover" />
        </div>
        <div className="flex gap-4 mb-4">
          <a href="https://drive.google.com/drive/folders/1k9P1Q20JSa-ulaAmW_tcc6AbThz18JkD?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
=======
        <header className="mb-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-300 mb-2">Case Study: Click2Permit – A Request Management System for HRMO</h1>
          <h2 className="text-xl text-green-400">Streamlining HR Document Requests</h2>
        </header>
        <div className="w-full mb-2">
          <Image src="/images/click2permit/Project1.jpg" alt="Click2Permit Hero" width={900} height={300} className="w-full h-auto rounded shadow-lg object-cover" />
        </div>
        <div className="flex gap-4 mb-4">
          <a href="https://www.figma.com/design/XTnwqmzeK4or4vO6bAAyFe/CLICK2PERMIT?node-id=0-1&t=LlqIXcSB2T8h5MHz-1" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Figma size={24} strokeWidth={2} />
          </a>
          <a href="https://drive.google.com/drive/folders/1wVFklmYdBFiWhs0xAV-piL5-YRKJC_-k?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
>>>>>>> 74faa704344ad38fe3fb4bf912810f6bae4c7ad1
            <Folder size={24} strokeWidth={2} />
          </a>
          <a href="https://github.com/Joro281/Click2Permit.git" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Github size={24} strokeWidth={2} />
          </a>
        </div>
<<<<<<< HEAD
        
        <div className="mb-10 text-green-400 font-mono text-sm">
          <span className="font-semibold">Role:</span> Full Stack Developer
        </div>



        <section id="introduction" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">1. Introduction</h2>
          <h3 id="background" className="text-green-400 font-semibold mb-2">Background</h3>
          <p className="text-gray-300 mb-4">The Human Resource Management Office (HRMO) of Cagayan de Oro City struggled with inefficiencies in processing document requests (e.g., Certificates of Employment, Leave Credits) due to manual, paper-based workflows. To modernize operations, Click2Permit was developed—a web-based system to automate request submissions, approvals, and tracking.</p>
          
          <h3 id="objective" className="text-green-400 font-semibold mb-2">Objective</h3>
          <p className="text-gray-300 mb-2">The system aims to:</p>
          <ul className="list-disc ml-6 text-gray-300 mb-4">
            <li>Automate document requests (e.g., COE, Service Records, Leave Credits).</li>
            <li>Provide real-time status updates for employees and admins.</li>
            <li>Enhance security with role-based access (Employees, HR Admins).</li>
          </ul>
        </section>

        <section id="system-design" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">2. System Design & Development</h2>
          <h3 id="architecture" className="text-green-400 font-semibold mb-2">Step 1: System Architecture</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-4">
            <li><strong>Frontend:</strong> Responsive web interface (compatible with desktops).</li>
            <li><strong>Backend:</strong> MySQL database for user profiles, requests, and audit logs.</li>
            <li><strong>User Roles:</strong></li>
            <ul className="list-disc ml-6 text-gray-300 mb-2">
              <li>Employees: Submit/document requests, track status.</li>
              <li>HR Admins: Approve/reject requests, manage templates, and notify users.</li>
            </ul>
          </ul>
          <div className="flex flex-wrap justify-center gap-4 my-4">
            <Image src="/images/click2permit/click2permit_userpage.jpg" alt="User Page" width={400} height={300} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
            <Image src="/images/click2permit/click2permit_adminpage.jpg" alt="Admin Page" width={400} height={300} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
          </div>

          <h3 id="features" className="text-green-400 font-semibold mb-2">Step 2: Key Features</h3>
          <table className="min-w-full text-left text-gray-300 border border-green-600 mb-4">
            <thead className="bg-green-900">
              <tr>
                <th className="py-2 px-4 border-b border-green-600">Feature</th>
                <th className="py-2 px-4 border-b border-green-600">Functionality</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4 border-b border-green-600">Document Requests</td><td className="py-2 px-4 border-b border-green-600">Employees select document types (e.g., COE) and submit details digitally.</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">Real-Time Tracking</td><td className="py-2 px-4 border-b border-green-600">View request status (Pending/Approved/Ready for Pickup).</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">Admin Dashboard</td><td className="py-2 px-4 border-b border-green-600">HRMO manages approvals, schedules pickups, and sends notifications.</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">Secure Authentication</td><td className="py-2 px-4 border-b border-green-600">Role-based login (Employee/Admin) with encrypted credentials.</td></tr>
            </tbody>
          </table>

          <h3 id="tech-stack" className="text-green-400 font-semibold mb-2">Step 3: Technology Stack</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-4">
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript (Figma for UI design).</li>
            <li><strong>Backend:</strong> PHP with MySQL.</li>
            <li><strong>Hosting:</strong> XAMPP local server (deployable to cloud).</li>
          </ul>
        </section>

        <section id="implementation" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">3. Implementation & Testing</h2>
          <h3 id="user-flow" className="text-green-400 font-semibold mb-2">Step 4: User Flow</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-4">
            <li><strong>Login:</strong> Employees/Admins authenticate via credentials.</li>
            <li><strong>Request Submission:</strong> Employees fill forms (e.g., personal details, document type).</li>
            <li><strong>Admin Review:</strong> HRMO validates requests and sets pickup schedules.</li>
            <li><strong>Notification:</strong> System alerts employees via email or dashboard.</li>
          </ul>
          <div className="flex flex-wrap justify-center gap-4 my-4">
            <Image src="/images/click2permit/click2permit_dfduser.jpg" alt="User Data Flow" width={400} height={300} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
            <Image src="/images/click2permit/click2permit_dfdadmin.jpg" alt="Admin Data Flow" width={400} height={300} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
          </div>

          <h3 id="testing" className="text-green-400 font-semibold mb-2">Step 5: Testing</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-4">
            <li><strong>Usability Testing:</strong> Scored 89.06/100 (SUS), rated &quot;Best Imaginable&quot; by users.</li>
            <li><strong>Functional Testing:</strong> 100% success rate for core features (e.g., request submission, approval).</li>
            <li><strong>Bug Fixes:</strong> Resolved document template rendering issues.</li>
          </ul>
          <div className="flex flex-row justify-center gap-4 my-4">
            <Image src="/images/click2permit/click2permit_SUS.jpg" alt="SUS Testing Results" width={400} height={300} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
            <Image src="/images/click2permit/click2permit_test.jpg" alt="Testing Interface" width={400} height={300} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
          </div>
        </section>

        <section id="results" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">4. Results & Impact</h2>
          <h3 id="outcomes" className="text-green-400 font-semibold mb-2">Key Outcomes</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-4">
            <li><strong>Transparency:</strong> Eliminated manual follow-ups with real-time tracking.</li>
            <li><strong>User Satisfaction:</strong> 90% of employees praised the system&apos;s ease of use.</li>
          </ul>

          <h3 id="feedback" className="text-green-400 font-semibold mb-2">User Feedback</h3>
          <blockquote className="border-l-4 border-green-400 pl-4 italic text-gray-300 mb-4">
            &quot;Click2Permit saved me hours—no more waiting in line at HRMO!&quot;<br />
            <span className="text-green-400">— City Hall Employee</span>
          </blockquote>

          <h3 id="challenges" className="text-green-400 font-semibold mb-2">Challenges & Solutions</h3>
          <table className="min-w-full text-left text-gray-300 border border-green-600 mb-4">
            <thead className="bg-green-900">
              <tr>
                <th className="py-2 px-4 border-b border-green-600">Challenge</th>
                <th className="py-2 px-4 border-b border-green-600">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4 border-b border-green-600">Limited employee tech literacy</td><td className="py-2 px-4 border-b border-green-600">Added guided tooltips and training.</td></tr>
              <tr><td className="py-2 px-4 border-b border-green-600">Database sync delays</td><td className="py-2 px-4 border-b border-green-600">Optimized PHP-MySQL queries.</td></tr>
            </tbody>
          </table>
        </section>

        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">5. Conclusion & Recommendations</h2>
          
          <h3 id="summary" className="text-green-400 font-semibold mb-2">Conclusion</h3>
          <p className="text-gray-300 mb-4">Click2Permit successfully digitized HRMO&apos;s document workflows, boosting efficiency, accuracy, and user satisfaction.</p>

          <h3 id="recommendations" className="text-green-400 font-semibold mb-2">Recommendations</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-4">
            <li><strong>Mobile App:</strong> Extend access for field employees.</li>
            <li><strong>Integration:</strong> Sync with city hall&apos;s digital signature system.</li>
          </ul>
        </section>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-xs italic">
            For more information, check out the links above
          </p>
        </div>
=======
        <div className="mb-10 text-green-400 font-mono text-sm">
          <span className="font-semibold">Role:</span> Full Stack Developer
        </div>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-300 mb-4">Methodology</h2>
          <div className="mb-6">
            <h3 className="text-green-400 font-semibold mb-1">Phase 1: Requirements Gathering</h3>
            <p className="text-gray-300 mb-2">Interviews & Observations: Conducted with HRMO staff to understand current workflows. Document Review: Analyzed existing HR documents (e.g., Certificate of Employment, Leave Credits).</p>
            <ul className="list-disc ml-6 text-gray-400 mb-2">
              <li>Manual submission and approval processes.</li>
              <li>Lack of real-time tracking.</li>
              <li>Inefficient communication between employees and HR.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-green-400 font-semibold mb-1">Phase 2: Requirements Analysis</h3>
            <p className="text-gray-300 mb-2">User roles and system requirements were defined, including registration, authentication, request submission, approval workflow, and secure storage.</p>
            <ul className="list-disc ml-6 text-gray-400 mb-2">
              <li>Admin (HRMO Personnel): Manages requests, approvals, notifications.</li>
              <li>Employees/Newly Employed: Submits requests, tracks status.</li>
              <li>System: Registration, authentication, approval workflow, secure storage.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-green-400 font-semibold mb-1">Phase 3: System Design</h3>
            <p className="text-gray-300 mb-2">Architectural design included frontend (HTML, CSS, JS), backend (PHP), database (MySQL), and hosting (XAMPP). Diagrams and models were created for context, data flow, use cases, activities, and database schema. Figma was used for UI/UX prototyping.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-green-400 font-semibold mb-1">Phase 4: Implementation</h3>
            <p className="text-gray-300 mb-2">Frontend was built with HTML/CSS, backend with PHP, and MySQL for data. Key features included user authentication, request processing, and admin notifications. Employees could request documents and view status; admins could approve/reject and generate reports.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-green-400 font-semibold mb-1">Phase 5: Testing & Evaluation</h3>
            <p className="text-gray-300 mb-2">Unit, integration, and user acceptance testing were conducted. Functional testing had a 100% success rate. Usability testing scored 89.06/100 (“Best Imaginable” on SUS).</p>
          </div>
          <div className="mb-6">
            <h3 className="text-green-400 font-semibold mb-1">Phase 6: Deployment & Training</h3>
            <p className="text-gray-300 mb-2">Deployed on local server (XAMPP) for HRMO. Training sessions were held for staff and employees.</p>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Results & Impact</h2>
          <ul className="list-disc ml-6 text-gray-300 mb-4">
            <li>Efficiency: Reduced document processing time from hours to minutes.</li>
            <li>User Satisfaction: Employees and admins reported high usability (89.06 SUS score).</li>
            <li>Error Reduction: Automated workflows minimized manual errors.</li>
            <li>Scalability: Designed for future enhancements (multi-language, mobile app).</li>
          </ul>
        </section>
>>>>>>> 74faa704344ad38fe3fb4bf912810f6bae4c7ad1
      </main>
      <SlideUpFooter />
    </>
  );
} 