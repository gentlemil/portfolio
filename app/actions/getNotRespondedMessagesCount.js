'use server'
import connectDB from '@/config/database'
import Message from '@/models/Message'
import { getSessionUser } from '@/utils/getSessionUser'

async function getNotRespondedMessageCount() {
  await connectDB()

  const sessionUser = getSessionUser()

  if (!sessionUser) {
    return { error: 'You are not authorized to perform this action' }
  }

  const count = await Message.countDocuments({ is_read: false })

  return { count }
}

export default getNotRespondedMessageCount
