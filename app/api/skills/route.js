import connectDB from '@/config/database'
import Skill from '@/models/Skill'

export const dynamic = 'force-dynamic'

export const GET = async (request) => {
  try {
    await connectDB()

    // Get the page and limit query parameters
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page') || 1
    const limit = searchParams.get('limit') || 10
    const skip = (page - 1) * limit
    const search = searchParams.get('search') || ''
    const orderBy = searchParams.get('orderBy') || 'desc'
    const sortBy = searchParams.get('sortBy') || 'name'
    const skillType = searchParams.get('type')

    const skills = await Skill.find({})
      .skip(skip)
      .limit(limit)
      .where('name')
      .regex(new RegExp(search, 'i'))
      .where('type')
      .regex(new RegExp(skillType, 'i'))
      .sort({ [sortBy]: orderBy })
      .lean()

    const total = await Skill.countDocuments({})

    const results = {
      skills,
      total,
    }

    return new Response(JSON.stringify(results), { status: 200 })
  } catch (error) {
    console.log('error: ', error)
    return new Response('Something Went Wrong', { status: 500 })
  }
}
