"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './ui/navbar';
import Footer from './ui/footer';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

const ConditionalLayout: React.FC<ConditionalLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  
  const isCaseStudy = pathname?.includes('/case-studies/');

  if (isCaseStudy) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ConditionalLayout; 