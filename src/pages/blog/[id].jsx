import dayjs from "dayjs";
import { client } from "../../../libs/client";

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export default function BlogId({ blog }) {
  return (
    <main className="font-medium ">
      <h1 className="text-3xl">{blog.title}</h1>
      <time dateTime={blog.publishedAt}>
        {dayjs(blog.publishedAt).format("YYYY年MM月DD日")}
      </time>
      <article
        className="prose prose-sm mt-8"
        dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
      />
    </main>
  );
}
