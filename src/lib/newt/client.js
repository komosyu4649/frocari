import { Content, createClient } from 'newt-client-js'

export const client = createClient({
  spaceUid: import.meta.env.PUBLIC_NEWT_SPACE_UID,
  token: import.meta.env.PUBLIC_NEWT_API_TOKEN,
  apiType: 'cdn',
})

export const getArticle = async (slug) => {
  const article = await client.getContent({
    appUid: import.meta.env.PUBLIC_NEWT_APP_UID,
    modelUid: import.meta.env.PUBLIC_NEWT_MODEL_POST,
    contentId: slug,
  })
  return article
}
