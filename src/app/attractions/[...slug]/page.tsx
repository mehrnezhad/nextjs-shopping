import type { attractionBlogFetchData } from "@/type/attractionBlog"
import Link from "next/link"
const getBlogs = async (slug: string) => {
    const res = await fetch(`http://localhost:3001/blog/category/${slug}`)
    if (!res.ok) throw new Error("Failed to fetch data from the server")
    const data = await res.json()
    return data.blogs;

}

const AttractionItem = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    let lastElement = slug.slice(-1);
    const items: attractionBlogFetchData[] = await getBlogs(lastElement)

    return (

     <>
           {/* products body */}
           <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 child:p-2 child:md:p-5">

{items.map(item=>(
  <div className="rounded-2xl bg-white shadow-normal dark:bg-zinc-700 overflow-hidden">
  <div className="relative">
    <img src={`http://localhost:3001/${item.image}`} className="mx-auto md:w-auto w-32" alt="p1"></img>
    <span className="absolute top-1 right-1 bg-orange-300 rounded-full px-2.5 md:px-3  h-5 leading-[24px] md:h-[30px] md:leading-[34px] dark:text-zinc-700 text-white text-xs md:text-sm"> 12%</span>
  </div>
  <h3 className="mb-2.5 md:h-14 h-10 text-sm md:text-lg dark:text-white text-zinc-700 font-medium line-clamp-2">
    {item.title}
  </h3>
  <div className="flex gap-x-2 md:gap-x-2.5">
    <div className="flex items-center">
      <span className="text-sm md:text-lg text-teal-600 dark:text-emerald-500 font-DanaDemiBold">
        154,000
      </span>
      <span className="text-xs md:text-sm text-teal-600  dark:text-emerald-500 tracking-tighter">
        تومان
      </span>
    </div>
    <div className="offer">
      <span className="text-sm md:text-lg">
        154,000
      </span>
      <span className="hidden xl:inline text-sm tracking-tighter">
        تومان
      </span>
    </div>
  </div>

  <div className="flex items-center justify-between">
    <div className="flex md:gap-3 gap-2">
      <div className="flex items-center justify-center w-[26px] h-[26px] md:w-[36px] md:h-[36px] bg-gray-100 dark:bg-zinc-800 cursor-pointer hover:bg-teal-600 dark:hover:bg-emerald-500 rounded-full transition-all  text-gray-400 hover:text-white">
        <Link href="#">
       </Link>
      </div>
      <div className="flex items-center justify-center hover:text-teal-600 cursor-pointer">
      </div>
    </div>
    <div className="flex text-yellow-400">
  </div>
  </div>

</div>


))}
          
            
          </div>
        </div>
        </>
    )
}
export default AttractionItem