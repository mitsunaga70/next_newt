import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getArticleBySlug } from '@/features/libs/newt'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  // secretを検証する、slugパラメータの有無を検証する
  if (secret !== process.env.NEWT_PREVIEW_SECRET || !slug) {
    return new Response('Invalid token', { status: 401 })
  }

  // slugと対応するコンテンツがあるか検証する
  const article = await getArticleBySlug(slug, true)
  if (!article) {
    return new Response('Invalid slug', { status: 401 })
  }

  // Cookieを設定し、ドラフトモードを有効にする
  draftMode().enable()

  // 取得した情報からパスを指定してリダイレクトする
  redirect(`/articles/${article.slug}`)
}