import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#E0E0E0] overflow-x-hidden selection:bg-[#DC143C] selection:text-white">
      <Navbar />
      <Hero />
    </main>
  );
}
