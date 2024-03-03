'use client'
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Spinner } from "@nextui-org/react";
import * as actions from '@/actions'
import type { attractionBlogFetchData } from "@/type/attractionBlog"
import AttractionCard from "./attraction-card";

const LoadMore =({ slugProps }: { slugProps: string }) => {

    const [attracions, setAttractions] = useState<attractionBlogFetchData[]>([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const { ref, inView } = useInView()
    const loadMore = async () => {
      
        let lastElement = slugProps.slice(-1);
        const nextPage = page + 1;
        try {
         //   if(!loading) return
            const newData = await actions.attractionFetchServerAction(lastElement, nextPage)
            if(newData.length === 0)  {
            setLoading(false) 
            return 
            }else{
                setLoading(true)
            }  

            setPage(nextPage)
            setAttractions((prevState: attractionBlogFetchData[]) => [...prevState, ...newData])

        } catch (error) {
             console.log('error')
        } 
    }

    useEffect(() => {
       if (inView) {
    
           loadMore()

       }
    
    }, [inView])


    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 pt-5">

                {attracions.map(item => (
                    <AttractionCard key={item._id} {...item} />
                ))}
            </div>

            <div
                className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3" ref={ref}>
               {loading ? <Spinner /> : null}
            </div>
        </>
    )
}

export default LoadMore