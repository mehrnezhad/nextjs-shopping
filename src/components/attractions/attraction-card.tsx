'use client'
import type { attractionBlogFetchData } from "@/type/attractionBlog"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const AttractionCard = ({ title, image, slug }: attractionBlogFetchData) => {
  const pathname = usePathname()

  return (

    <div className="rounded-t-2xl bg-white shadow-normal dark:bg-zinc-700 overflow-hidden">

      <div className="relative">
        <Link href={`${pathname}/${slug}`}>

          <Image src={`http://localhost:3001/${image}`} width={280} height={150} className="mx-auto md:w-auto" alt={title} loading="lazy" />
        </Link>
      </div>

      <h3 className="mb-2.5 md:h-14 h-10 text-sm md:text-lg dark:text-white text-zinc-700 font-medium  p-2 md:p-5 text-center">
        <Link className="line-clamp-1" href={`/attraction/${slug}`}>{title}</Link>
      </h3>
    </div>

  )
}
export default AttractionCard