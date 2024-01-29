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