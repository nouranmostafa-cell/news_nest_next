import type { Metadata } from "next";
import Link from "next/link"; // ✅ Import Link
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex items-center justify-between max-w-4xl mx-auto">
            <h1 className="text-xl font-bold" >
              <Link href="/" >
                News Website
              </Link>
            </h1>
            <ul className="flex gap-4 text-sm">
              <li>
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:underline">
                  Categories
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="p-4 max-w-4xl mx-auto">{children}</main>

        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2025 News
        </footer>
      </body>
    </html>
  );
}
