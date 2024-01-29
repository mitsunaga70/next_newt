import Link from "next/link";
import Image from "next/image";
import styles from "./BlogItem.module.scss";

function BlogItem({ blogItem }: any) {
  return (
    <li className={styles.item}>
      <a href={`/blog/${blogItem.slug}`}>
        <figure>
          <Image
            src={blogItem.coverImage}
            width={338 * 2}
            height={225 * 2}
            alt={blogItem.title}
            className="u-pc"
          />
          <Image
            src={blogItem.coverImage}
            width={375}
            height={228}
            alt={blogItem.title}
            className="u-sp"
          />
        </figure>
        <div className={styles.body}>
          <ul className={styles.tag_list}>
            {
              blogItem.tags &&
              blogItem.tags.map((tag: any) => {
                return <li className={styles.tag_item}>{tag.name}</li>;
              })
            }
          </ul>
          <h3>{blogItem.title}</h3>

        </div>
      </a>
    </li>
  )
}

export default BlogItem;
