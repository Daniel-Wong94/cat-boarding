import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <header className="px-8">
        <NavBar />
      </header>
      <hr className="h-px my-8 bg-red border-0" />
      <main className="flex min-h-screen flex-col items-center w-full">
        <Hero />
      </main>
    </>
  );
}
