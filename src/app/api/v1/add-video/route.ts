export async function POST(request : any){
    const { 
        url,
        title,
        desc,
        view,
        thumbnail,
        published,
        tag_id,
        channel
    } = request.json()
    return Response.json({ data: "Hello World!" })
}