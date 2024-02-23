"use client";



import React, { ReactNode } from 'react';
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
         <ProgressLoader />
        {props.children}
        {props.parallel}
      </body>
    </html>
  );
}
