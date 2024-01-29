import { createClient } from "newt-client-js"
import { cache } from 'react'
import 'server-only'


export type Tag = {
  slug: string
  name: string
}
export type Article = {
  _id: string
  _sys: string
  title: string
  slug: string
  body: string
  coverImage: {
    src: string
    width: number
    height: number
  };
}

export const newtClient = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})

export const getArticles = cache(async () => {
  const { items } = await newtClient.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      select: ["_id", "title", "slug", "body", "coverImage", "tags"],
    },
  })
  return items
})

export const getArticleBySlug = cache(async (slug: string) => {
  const article = await newtClient.getFirstContent<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      slug,
      select: ['_id', 'title', 'slug', 'body'],
    },
  })


  return article
})