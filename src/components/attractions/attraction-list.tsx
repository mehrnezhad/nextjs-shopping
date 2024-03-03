import type { attractionBlogFetchData } from "@/type/attractionBlog"
import AttractionCard from "./attraction-card";
import LoadMore from './load-more';




const AttractionList = async ({ items ,slugProps }: { items: attractionBlogFetchData[] ,slugProps: string} ) => {

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">

                {items.map(item => (
                    <AttractionCard key={item._id} {...item} />
                ))}

            </div>
        
            <LoadMore slugProps={slugProps} /> 

        </>


    )
}

export default AttractionList