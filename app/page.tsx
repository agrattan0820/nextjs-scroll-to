import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-emerald-300 flex justify-center gap-4 items-center min-h-screen text-black">
      <Link href="/app" className="bg-white p-2 rounded">
        Test App Router Scroll-To
      </Link>
      <Link href="/app" className="bg-white p-2 rounded">
        Test App Router Anchor Tag Scroll-To
      </Link>
      <Link href="/pages" className="bg-white p-2 rounded">
        Test Pages Scroll-To
      </Link>
    </main>
  );
}
