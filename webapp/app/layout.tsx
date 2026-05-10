import type { Metadata } from "next";
import "./globals.css";

import React from 'react';

import { Sidebar } from "./components/Sidebar";
import { Agentbar } from "./components/Agentbar";
import { Topbar } from "./components/Topbar";

//Meta data for website
export const metadata: Metadata = {
  title: "HeiProb",
  description: "Problem- und Projektmanagement für die Smart City Heidelberg",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 return (
    <html lang="de">
      <body className="font-sans text-slate-900">
        <div className="flex h-screen bg-slate-50">
          
          <Sidebar />

          <main className="flex-1 overflow-y-auto flex flex-col">
            {/* TOP BAR */}
            <Topbar />

            <div className="flex-1 flex overflow-hidden">
              {/* CONTENT AREA => page.tsx */}
              <div className="flex-1 p-8 overflow-y-auto">
                {children}
              </div>

              {/* Sidebar for Agent input */}
              <Agentbar />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}