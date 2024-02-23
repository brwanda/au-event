"use client";



import React, { Suspense, ReactNode } from 'react';
import "./globals.css";
import { ProgressLoader } from 'nextjs-progressloader';


interface RootLayoutProps {
  someRequiredProp: string;
  optionalProp?: number;
  children: ReactNode;
  parallel: ReactNode; // Define parallel prop of type ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  
  return (
    <html lang="en">
      <body className="kalisa">
        <Suspense><ProgressLoader /></Suspense>
       
        {props.children}
        {props.parallel}
      </body>
    </html>
  );
}
