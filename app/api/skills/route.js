import connectDB from '@/config/database'
import Skill from '@/models/Skill'

export const dynamic = 'force-dynamic'

export const GET = async () => {
  try {
    await connectDB()

    const skills = await Skill.find({}).lean()
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
