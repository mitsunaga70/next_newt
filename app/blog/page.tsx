
import * as Blog from "@/features/blog/components/Index";
import { newtClient } from "@/features/libs/newt";
import React from "react";

const BlogPage = async ({ blog }: any) => {



  return (
    <div>
      <Blog.BlogList blog={blog}></Blog.BlogList>

    </div>
  );
};

export async function getServerSideProps() {
  const { items: blog } = await newtClient.getContents({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "title", "slug", "body", "coverImage", "tags"],
      order: ["-_priority", "-_sys.customOrder"],
    },
  });

  return {
    props: { blog }, // これにより、サーバー側で取得したデータがBlogPageコンポーネントに渡されます
  };
}


export default BlogPage;
