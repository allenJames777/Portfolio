import { Inter } from "next/font/google";
import Pulley from "@/components/Pulley";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // Absolute base for link-preview (Open Graph) image URLs
  metadataBase: new URL("https://allenjameslluvido.vercel.app"),
  title: "Allen James Lluvido | Workflow Engineer",
  description:
    "Portfolio of Allen James Lluvido — Workflow Engineer specializing in automation, integrations, and data analytics.",
  openGraph: {
    title: "Allen James Lluvido | Workflow Engineer",
    description:
      "Workflow Engineer specializing in automation, integrations, and data analytics.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <Pulley />
        {children}
      </body>
    </html>
  );
}
