export type Post = {
  _id: string
  _sys: {
    raw: [Object]
    customOrder: number
    createdAt: string
    updatedAt: string
  }
  title: string
  slug: string
  thumbnail: {
    _id: string
    altText: string
    description: string
    fileName: string
    fileSize: number
    fileType: string
    height: number
    metadata: {}
    src: string
    title: string
    width: number
  }
  date: string
  introduction: string
  content: string
  category: {
    _id: string
    _sys: [Object]
    name: string
    slug: string
  }
  tag: [
    {
      name: string
      slug: string
    }
  ]
}

export type Category = {
  _id: string
  _sys: {
    raw: {
      createdAt: string
      updatedAt: string
      firstPublishedAt: string
      publishedAt: string
    }
    customOrder: number
    createdAt: string
    updatedAt: string
  }
  name: string
  slug: string
}

export type Breadcrumb = {
  name: string
  href: string
}
