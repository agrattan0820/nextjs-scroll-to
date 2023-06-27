import Image from "next/image";
import Link from "next/link";

export default function AppTest() {
  return (
    <main className="text-black">
      <div className="bg-blue-300 gap-2 flex min-h-screen flex-col items-center justify-center p-24">
        Hello from the App Router
        <Link
          href="#app"
          scroll={false}
          className="bg-white rounded p-2 text-black"
        >
          Scroll To Section
        </Link>
      </div>
      <div
        id="app"
        className="text-black bg-indigo-300 flex min-h-screen flex-col items-center justify-center p-24"
      >
        You scrolled!
      </div>
    </main>
  );
}
