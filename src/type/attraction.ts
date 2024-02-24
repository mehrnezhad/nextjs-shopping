export type attractionFetchData = {
   _id : string,
   title : string,
   slug: string,
   parent : string,
   parents: string[],
   updatedAt : Date,
   createdAt : Date,
   children: attractionFetchData[]
}
