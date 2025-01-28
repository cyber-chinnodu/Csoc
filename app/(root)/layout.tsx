import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"
import LeftPanel from "@/components/shared/Leftpanel";
import Rightpanel from "@/components/shared/Rightpanel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <html lang='en'>
        <body className={inter.className}>
          {/* <Topbar /> */}

          <main className='flex flex-row'>
            <LeftPanel/>
            <section className='main-container'>
              <div className='w-full max-w-4xl'>{children}</div>
            </section>
            {/* @ts-ignore */}
            <Rightpanel />     
          </main>

            {/* <Bottombar /> */}
        </body>
      </html>

  );
}