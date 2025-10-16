import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "yo",
  description: ":ppp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <meta name="theme-color" content="#000000" />
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
