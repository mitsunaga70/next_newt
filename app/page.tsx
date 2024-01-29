import Image from 'next/image'
import styles from './page.module.css'
import { getArticles } from '@/features/libs/newt';
import { BlogList } from '@/features/blog/components/Index';
import Container from './components/layouts/container/Container';




export default async function Home() {
  const blog: any = await getArticles()

  return (
    <>
      <Container>
        <BlogList blog={blog}></BlogList>
      </Container>
    </>
  )
}



