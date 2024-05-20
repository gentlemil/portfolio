import connectDB from '@/config/database'
import Project from '@/models/Project'

export const dynamic = 'force-dynamic'

export const GET = async (request) => {
  try {
    await connectDB()

    const projects = await Project.find({}).lean()
    const total = await Project.countDocuments({})

    const results = {
      projects,
      total,
    }

    return new Response(JSON.stringify(results), { status: 200 })
  } catch (error) {
    console.log('error: ', error)
    return new Response('Something Went Wrong', { status: 500 })
  }
}
