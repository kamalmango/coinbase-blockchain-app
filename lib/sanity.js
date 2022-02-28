import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'vjfpc1rv',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
})