import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="flex flex-col items-center justify-center p-24">
        <p>Welcome to the home page!</p>
      </main>
    </div>
  );
}
