import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-black">
      <div className="bg-orange-300 flex gap-2 min-h-screen flex-col items-center justify-center p-24">
        Hello from the Pages Directory
        <Link
          href="#pages"
          scroll={false}
          className="text-black rounded p-2 bg-white"
        >
          Scroll To Section
        </Link>
      </div>
      <div
        id="pages"
        className="bg-red-300 text-black flex min-h-screen flex-col items-center justify-center p-24"
      >
        You scrolled!
      </div>
    </main>
  );
}
