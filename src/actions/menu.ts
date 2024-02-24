'use server'

export const categoryBlog = async () => {
    
    const res = await fetch('http://localhost:3001/category/children/65d5d2846009f2b41bfe0a55',{
        method:'GET',
        cache: 'no-store',
        headers : {
            'Content-Type' : 'application/json'
        }
    })

    if (res.ok) {
        const data = await res.json();
        return data.category;
    } else {
        throw new Error('Something went wrong !');
    }
}

