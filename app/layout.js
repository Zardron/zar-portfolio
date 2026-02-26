import "./globals.css";
import LeftPanel from "./components/LeftPanel";
import PageCounter from "./components/PageCounter";
import { ParticlesContainer } from "./components/Particles";
import FirstLoadLoader from "./components/FirstLoadLoader";

export const metadata = {
  title: "Zardron | Full Stack Developer",
  description: "Portfolio of Zardron - Full Stack Developer based in the Philippines. Specializing in modern web development.",
  keywords: ["developer", "portfolio", "full stack", "react", "next.js"],
  authors: [{ name: "Zardron" }],
  openGraph: {
    title: "Zardron | Full Stack Developer",
    description: "Portfolio of Zardron - Full Stack Developer based in the Philippines.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        <FirstLoadLoader />
        <LeftPanel />
        <PageCounter />
        <ParticlesContainer />
        <main className="lg:ml-72 pt-14 lg:pt-0 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
