import connectDB from '@/config/database'
import Message from '@/models/Message'

export const dynamic = 'force-dynamic'

export const GET = async () => {
  try {
    await connectDB()

    const messages = await Message.find({}).lean()
    const total = await Message.countDocuments({})

    const results = {
      messages,
      total,
    }

    return new Response(JSON.stringify(results), { status: 200 })
  } catch (error) {
    console.log('error: ', error)
    return new Response('Something Went Wrong', { status: 500 })
  }
}
