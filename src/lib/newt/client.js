import { createClient } from 'newt-client-js'

export const client = createClient({
  spaceUid: import.meta.env.PUBLIC_NEWT_SPACE_UID,
  token: import.meta.env.PUBLIC_NEWT_API_TOKEN,
  apiType: 'cdn',
  // query: {
  //   depth: 2,
  // },
})
