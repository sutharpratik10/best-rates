import Navbar from "@/components/navbar";
import Exchange from '../components/exchange';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar/>
      <div className="flex h-screen flex-col justify-center">
        <Exchange />
      </div>
    </main>
  );
}
