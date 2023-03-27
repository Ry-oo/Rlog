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
        <ul className="mt-3 space-x-3">
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link
                href={`/blog/${blog.id}`}
                className="text-blue-800 hover:text-blue-400 text-xl"
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
