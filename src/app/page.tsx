import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Elephant Lab</h1>
      </div>
    </main>
  );
}