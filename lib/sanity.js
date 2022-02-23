import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'vjfpc1rv',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: 'skXWF4QappPr5HxklHJQvgPy4egConIiVUxdRcl0g3UMxZNkowXcMp5fmLZWxpCEle2stJWlTvgmQx0D6QxSqRqrZUBmdCxgv7VuL29n7E4GuNg0yl1vAL5BawdVylTukSSoYqh4hkqUrwUgZoNU5SECA7pADHmGZtKYQzA8CQJNsncA3lfQ',
  useCdn: false,
})