import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { client } from "../../libs/client";
import Head from "next/head";
import Link from "next/link";
import Sidebar from "./components/sidebar";

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};

const inter = Inter({ subsets: ["latin"] });

export default function Home({ blog }) {
  return (
    <div>
      <Head>
        <title>Rlog</title>
      </Head>
      <main className="flex space-x-14">
        <Sidebar className="" />
        <ul className="w-72 space-y-8">
          {blog.map((blog) => (
            <li
              key={blog.id}
              className="mt-3 min-w-full max-w-md grid-cols-3 space-y-4 rounded-br-lg border-2 py-3.5 text-center shadow-lg outline outline-gray-500"
            >
              <Link
                href={`/blog/${blog.id}`}
                className="text-xl text-black hover:text-gray-400"
              >
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
