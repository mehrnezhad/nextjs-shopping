// const fetchData = async () => {
//     await new Promise((r)=>setTimeout(r,5000))

//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'GET',
//         headers: {
//             'content-Type': 'application/json'
//         }
//     })
//     const data = await res.json()
//     return data;
// }
import * as actions from "@/actions"
import type {attractionBlogFetchData} from "@/type/attractionBlog"
const TestFetch = async () => {

    const lastElement = 'istanbul-attractions'
   // let lastElement = slug.slice(-1);
    const page = 1
   const posts: attractionBlogFetchData[] = await actions.attractionFetchServerAction(lastElement, page)
  
    return (
        <>
            {posts.map((post: {title : string}) => (
                <li>{post.title}</li>
            ))}

        </>
    )
}
export default TestFetch