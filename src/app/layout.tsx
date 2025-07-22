import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arel Tohoubi | Portfolio",
  description: "Developpeur web | Portfolio",
   icons: {
    icon: '/logo.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
