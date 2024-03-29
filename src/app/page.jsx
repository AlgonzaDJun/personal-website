// "use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { About } from "./about/About";
import { Portfolio } from "./portfolio/Portfolio";

export default function Home() {
  return (
    <main className="w-100 min-vh-100 pt-5">
      <Header />
      <About />
      <Portfolio />
    </main>
  );
}
