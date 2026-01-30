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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <FirstLoadLoader />
        <LeftPanel />
        <PageCounter />
        <ParticlesContainer />
        <main className="ml-72 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
