import Image from 'next/image'
import styles from './page.module.css'
import { newtClient } from '@/features/libs/newt';
import { BlogList } from '@/features/blog/components/Index';
import Container from './components/layouts/container/Container';




export default async function Home() {
  const { items: blog }: any = await newtClient.getContents({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "title", "slug", "body", "coverImage", "tags"],
      order: ["-_priority", "-_sys.customOrder"],

    },
  });

  return (
    <>
      <Container>
        <BlogList blog={blog}></BlogList>
      </Container>
    </>
  )
}

