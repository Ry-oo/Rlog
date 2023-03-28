import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { client } from "../../libs/client";
import Head from "next/head";
import Link from "next/link";

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
      <main>
        <ul>
          {blog.map((blog) => (
            <li
              key={blog.id}
              className="mt-3 min-w-full max-w-md space-y-4 overflow-hidden rounded-br-lg border-2 py-3.5 text-center shadow-lg outline outline-black"
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
