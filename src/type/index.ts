export type Post = {
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
    _sys: {
      raw: any
      customOrder: number
      createdAt: string
      updatedAt: string
    }
    name: string
    slug: string
  }
  tag: {
    _id: string
    _sys: any
    name: string
    slug: string
  }[]
  relation: {
    _id: string
    _sys: any
    title: string
    slug: string
    thumbnail: any
    date: string
    introduction: string
    content: string
    category: any
    tag: any[]
    relation: any[]
    popular: boolean
  }[]
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
