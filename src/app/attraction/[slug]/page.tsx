import * as actions from "@/actions"
import Image from "next/image"
const AttractionItem = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    const item = await actions.attractionListItem(slug)
    const itemAttraction = item[0]
    return (
        <>

            <section className='pt-48 dark:bg-zinc-900 bg-gray-200'>
                <div className='container'>
                    <div className="flex-col items-center justify-center gap-2 pb-4">
                        <div className="flex items-center justify-center">
                            <h1 className="text-2xl">{itemAttraction?.title}</h1>
                        </div>

                        <div className="flex items-center justify-center rounded-lg">
                            <Image src={`http://localhost:3001/${itemAttraction?.image}`} alt={itemAttraction?.title} width={600} height={400} />
                        </div>

                    </div>
                    <div className="flex">
                        {itemAttraction?.description}
                    </div>

                </div>
            </section>
        </>
    )
}
export default AttractionItem