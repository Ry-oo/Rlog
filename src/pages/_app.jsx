import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <div className="mx-auto max-w-prose">
      <header className="py-4 border-b border-gray-300">
        <h1 className="text-3xl font-bold">
          <Link href="/">Rlog</Link>
        </h1>
      </header>
      <main className="mt-8">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
