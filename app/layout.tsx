import React from "react";
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans text-base text-gray-800">
        {children}
      </body>
    </html>
  );
}
