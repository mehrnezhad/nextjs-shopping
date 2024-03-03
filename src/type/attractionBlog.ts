type categoryAttractionBlog= {
    title: string,
    slug: string

}
export type attractionBlogFetchData = {
    _id: string,
    slug: string,
    title: string,
    short_desc : string,
    description: string,
    image: string,
    tags: string[],
    author : string,
    catergory: categoryAttractionBlog,
    likes: string[],
    dislikes:string[],
    bookmarks: string[],
    comments : string[],
    createdAt: Date,
    updatedAt:Date

}

export type attractionListMeta = {
    meta_title: string,
    title:string
    meta_description : string,
    canonical : string,
    createdAt:Date
}