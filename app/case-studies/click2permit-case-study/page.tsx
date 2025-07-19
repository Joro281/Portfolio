import React from "react";
import ScrollLoadingBar from "../../components/ui/ScrollLoadingBar";
import SlideUpFooter from "../../components/ui/SlideUpFooter";
import Link from "next/link";
import Image from "next/image";
import { Folder, Github } from "lucide-react";

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

        <header className="mb-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-300 mb-2">Case Study: Click2Permit – Online Request System for Human Resource Management Office</h1>
          <h2 className="text-xl text-green-400">Digital Transformation of HR Document Processing</h2>
        </header>

        <div className="w-full mb-2">
          <Image src="/images/click2permit/Project1.jpg" alt="Click2Permit System Hero" width={900} height={300} className="w-full h-auto rounded shadow-lg object-cover" />
        </div>
        <div className="flex gap-4 mb-4">
          <a href="https://drive.google.com/drive/folders/1k9P1Q20JSa-ulaAmW_tcc6AbThz18JkD?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Folder size={24} strokeWidth={2} />
          </a>
          <a href="https://github.com/Joro281/Click2Permit.git" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-green-400 hover:text-green-300">
            <Github size={24} strokeWidth={2} />
          </a>
        </div>
        
        <div className="mb-10 text-green-400 font-mono text-sm">
          <span className="font-semibold">Role:</span> Full Stack Developer
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">1. Introduction</h2>
          <h3 className="text-green-400 font-semibold mb-2">Background</h3>
          <p className="text-gray-300 mb-4">The Human Resource Management Office (HRMO) of Cagayan de Oro City struggled with inefficiencies in processing document requests (e.g., Certificates of Employment, Leave Credits) due to manual, paper-based workflows. To modernize operations, Click2Permit was developed—a web-based system to automate request submissions, approvals, and tracking.</p>
          
          <h3 className="text-green-400 font-semibold mb-2">Objective</h3>
          <p className="text-gray-300 mb-2">The system aims to:</p>
          <ul className="list-disc ml-6 text-gray-300 mb-4">
            <li>Automate document requests (e.g., COE, Service Records, Leave Credits).</li>
            <li>Provide real-time status updates for employees and admins.</li>
            <li>Enhance security with role-based access (Employees, HR Admins).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">2. System Design & Development</h2>
          <h3 className="text-green-400 font-semibold mb-2">Step 1: System Architecture</h3>
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

          <h3 className="text-green-400 font-semibold mb-2">Step 2: Key Features</h3>
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

          <h3 className="text-green-400 font-semibold mb-2">Step 3: Technology Stack</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-4">
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript (Figma for UI design).</li>
            <li><strong>Backend:</strong> PHP with MySQL.</li>
            <li><strong>Hosting:</strong> XAMPP local server (deployable to cloud).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">3. Implementation & Testing</h2>
          <h3 className="text-green-400 font-semibold mb-2">Step 4: User Flow</h3>
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

          <h3 className="text-green-400 font-semibold mb-2">Step 5: Testing</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-4">
            <li><strong>Usability Testing:</strong> Scored 89.06/100 (SUS), rated "Best Imaginable" by users.</li>
            <li><strong>Functional Testing:</strong> 100% success rate for core features (e.g., request submission, approval).</li>
            <li><strong>Bug Fixes:</strong> Resolved document template rendering issues.</li>
          </ul>
          <div className="flex flex-row justify-center gap-4 my-4">
            <Image src="/images/click2permit/click2permit_SUS.jpg" alt="SUS Testing Results" width={400} height={300} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
            <Image src="/images/click2permit/click2permit_test.jpg" alt="Testing Interface" width={400} height={300} className="rounded shadow bg-black w-full h-auto max-w-[400px]" />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">4. Results & Impact</h2>
          <h3 className="text-green-400 font-semibold mb-2">Key Outcomes</h3>
          <ul className="list-disc ml-6 text-gray-300 mb-4">
            <li><strong>Transparency:</strong> Eliminated manual follow-ups with real-time tracking.</li>
            <li><strong>User Satisfaction:</strong> 90% of employees praised the system&apos;s ease of use.</li>
          </ul>

          <h3 className="text-green-400 font-semibold mb-2">User Feedback</h3>
          <blockquote className="border-l-4 border-green-400 pl-4 italic text-gray-300 mb-4">
            "Click2Permit saved me hours—no more waiting in line at HRMO!"<br />
            <span className="text-green-400">— City Hall Employee</span>
          </blockquote>

          <h3 className="text-green-400 font-semibold mb-2">Challenges & Solutions</h3>
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

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">5. Conclusion & Recommendations</h2>
          
          <h3 className="text-green-400 font-semibold mb-2">Conclusion</h3>
          <p className="text-gray-300 mb-4">Click2Permit successfully digitized HRMO&apos;s document workflows, boosting efficiency, accuracy, and user satisfaction.</p>

          <h3 className="text-green-400 font-semibold mb-2">Recommendations</h3>
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
      </main>
      <SlideUpFooter />
    </>
  );
} 