
import { Suspense, useState } from "react"
import AttractionShowLoading from "@/components/attractions/attraction-loading"
import AttractionList from "@/components/attractions/attraction-list"
import * as actions from "@/actions"
import type { attractionListMeta } from "@/type/attractionBlog"


export async function generateMetadata({ params }: { params: { slug: string } }) {


  const { slug } = params
  const newSlug = slug.toString().replace(/,/, '\/')
  const siteUrl = process.env.DB_HOST
  let lastElement = slug.slice(-1);
  const metaSeo: attractionListMeta = await actions.attractionsListMetaData(lastElement)

  return {
    title: metaSeo?.meta_title,
    description: metaSeo?.meta_description,
    canonical: metaSeo?.canonical,
    openGraph: {
      title: metaSeo?.meta_title,
      description: metaSeo?.meta_description,
      type: 'article',
      publishedTime: metaSeo?.createdAt
    },
    twitter: {
      card: 'summary_large_image',
      title: metaSeo?.meta_title,
      description: metaSeo?.meta_description,
      creator: '@nextjs',
    },
    alternates: {
      canonical: `${siteUrl}/attractions/${newSlug}`,
    },
  }
}



const AttractionItem = async ({ params }: { params: { slug: string } }) => {

  const { slug } = params
  let lastElement = slug.slice(-1);
  let page = 1


  const itemsList = actions.attractionFetchServerAction(lastElement, page)
  const CategoryAttractionList = actions.attractionsListMetaData(lastElement)
  const [CategoryAttraction, items] = await Promise.all([CategoryAttractionList, itemsList])


  return (

    <>
      <section className='pt-48 dark:bg-zinc-900 bg-gray-200'>
        <div className='container'>
          <div className="flex flex-wrap justify-start text-2xl pb-2">
            {<h1>{CategoryAttraction?.title}</h1>}
          </div>
          <Suspense fallback={<AttractionShowLoading />}>
            <AttractionList items={items} slugProps={slug} />
          </Suspense>

        </div>

      </section>


    </>
  )
}
export default AttractionItem