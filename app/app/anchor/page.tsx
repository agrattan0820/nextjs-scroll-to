import Image from "next/image";
import Link from "next/link";

export default function AppTest() {
  return (
    <main>
      <div className="bg-blue-300 flex min-h-screen flex-col items-center justify-between p-24">
        Hello from the App Router Anchor Tag Test
        <a href="#appAnchor">Scroll To Section</a>
      </div>
      <div
        id="appAnchor"
        className="bg-indigo-300 flex min-h-screen flex-col items-center justify-between p-24"
      >
        You scrolled!
      </div>
    </main>
  );
}
