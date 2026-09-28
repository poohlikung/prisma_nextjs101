import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  const { title, content } = await request.json()

  const post = await prisma.post.create({
    data: { title,
         content 
        },
  })

  return Response.json({ data: post }, { status: 201 })
}

export async function GET(){
    const posts = await prisma.post.findMany()
    return Response.json(posts)
  
}
