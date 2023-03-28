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
        <ul className="mt-3 space-y-4 py-3.5 min-w-full max-w-md rounded-br-lg overflow-hidden shadow-lg text-center border-2 outline outline-black">
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link
                href={`/blog/${blog.id}`}
                className="text-black hover:text-gray-400 text-xl"
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
