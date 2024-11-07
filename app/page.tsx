import Title from "@/components/Title";
import "./globals.css";
import HomePage from "./Home";
import Navbar from "./Navbar";
import Resume from "./resume/page";
import Services from "./services/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HomePage />
      <Title title="Resume" />
      <Resume />
      <Title title="Sevices" />
      <Services />
      <Title title="Projects" />
      <Projects />
      <Title title="get in touch" />
      <Contact />
    </main>
  );
}
