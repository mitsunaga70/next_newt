import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getArticles, getArticleBySlug } from '@/features/libs/newt'

import type { Metadata } from 'next'
import type { Article } from '@/features/blog/types/article'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}



export default async function Article({ params }: Props) {
  const { isEnabled } = draftMode()
  const { slug } = params
  const article = await getArticleBySlug(slug, true)


  if (!article) {
    notFound()
  }

  return (
    <main >
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.body }} />
    </main>
  )
}