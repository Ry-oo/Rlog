import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-300 py-4">
      <h1 className="text-3xl font-bold">
        <Link href="/">Rlog</Link>
      </h1>
    </header>
  );
}
