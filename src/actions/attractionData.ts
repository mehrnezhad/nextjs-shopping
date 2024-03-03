'use server'
import { cache } from 'react'

export const attractionFetchServerAction = async (slug: string, page: number) => {
  // await new Promise((r)=>setTimeout(r,5000))

  const res = await fetch(`${process.env.HOST_ADDR}/blog/category/${slug}?page=${page}`, {
    next: { revalidate: 60 }
  })
  if (!res.ok) throw new Error("Failed to fetch data from the server")
  const data = await res.json()
  return data.blogs;

}


export const attractionsListMetaData = cache(async (slug: string) => {


  const res = await fetch(`${process.env.HOST_ADDR}/category/${slug.toString()}`, {
    method: 'GET',
    next: { revalidate: 3 }
  })

  if (!res.ok) throw new Error("Failed to fetch data from the server")

  const data = await res.json()
  return data.category

})


export const attractionListItem = cache(async (slug: string) => {
  const res = await fetch(`${process.env.HOST_ADDR}/blog/${slug}`, {
    method: 'GET',
    next: { revalidate: 3600 }
  })
  if(!res.ok) throw new Error('Failed to fetch data from the server')
  const data = await res.json()

  return data.blog
})