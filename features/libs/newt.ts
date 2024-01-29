import 'server-only'
import { createClient } from 'newt-client-js'
import { cache } from 'react'
import type { Article } from '@/features/blog/types/article'

// Newt CDN APIのクライアント（公開コンテンツのみ取得）
const cdnClient = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})

// Newt APIのクライアント（全コンテンツ取得）
const apiClient = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_API_TOKEN + '',
  apiType: 'api',
})

export const getArticles = cache(async () => {
  const { items } = await cdnClient.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      select: ["_id", "title", "slug", "body", "coverImage", "tags"],
    },
  })
  return items
})

export const getArticleBySlug = cache(
  async (slug: string, isDraft: boolean) => {
    const client = isDraft ? apiClient : cdnClient
    const article = await client.getFirstContent<Article>({
      appUid: 'blog',
      modelUid: 'article',
      query: {
        slug,
        select: ["_id", "title", "slug", "body", "coverImage", "tags"],
      },
    })
    return article
  }
)