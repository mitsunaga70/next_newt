import styles from "./BlogList.module.scss";
import type { Article } from "@/features/types/blog";
import BlogItem from "../BlogItem/BlogItem";

type Props = {
  blog: Array<Article>
}

function BlogList({ blog }: Props) {


  return (
    <ul className={styles.list}>
      {
        blog.map((blogItems) => {
          return <BlogItem blogItem={blogItems}></BlogItem>;
        })
      }
    </ul>

  )
}

export default BlogList;