
import * as Blog from "@/features/blog/components/Index";
import { getArticles } from "@/features/libs/newt";
import React from "react";

const BlogPage = async () => {
  const blog: any = await getArticles()

  return (
    <div>
      <Blog.BlogList blog={blog}></Blog.BlogList>

    </div>
  );
};


export default BlogPage;
