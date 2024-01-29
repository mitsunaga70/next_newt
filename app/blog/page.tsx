
import * as Blog from "@/features/blog/components/Index";
import { newtClient } from "@/features/libs/newt";
import React from "react";

const BlogPage = async () => {
  const { items: blog }: any = await newtClient.getContents({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "title", "slug", "body", "coverImage", "tags"],
      order: ["-_priority", "-_sys.customOrder"],

    },
  });


  return (
    <div>
      <Blog.BlogList blog={blog}></Blog.BlogList>

    </div>
  );
};

export default BlogPage;
