import type { Metadata } from "next";
import {Audiowide} from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "AiPnut - Peanut forever. AiPnut, eternally",
  description: "AiPnut is a heartfelt tribute to Peanut the Squirrel, who was taken from his home but whose legacy will never be forgotten",
};

const font = Audiowide({
  weight: "400",
  style: "normal",
  subsets: ["latin"]

})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}`}
      >
        <>--</>
        {/* {children} */}
      </body>
    </html>
  );
}
