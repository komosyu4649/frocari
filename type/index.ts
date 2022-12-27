export type Post = {
    href: string
    imgSrc: string
    imgAlt: string
    categoryName: string
    categoryHref: string
    timeName: string
    timeDate: string
    title: string
    tags: {
      href: string
      name: string
    }[]
  }