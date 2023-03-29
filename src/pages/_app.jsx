import "@/styles/globals.css";

import Header from "./components/header";

export default function App({ Component, pageProps }) {
  return (
    <div className="mx-24  w-full ">
      <Header />
      <main className="mt-8">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
