'use server'
import { revalidatePath } from 'next/cache'
import connectDB from '@/config/database'
import { getSessionUser } from '@/utils/getSessionUser'
import Message from '@/models/Message'

async function deleteMessage(messageId) {
  // check if user is authenticated
  const sessionUser = await getSessionUser()

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('You are not authenticated')
  }

  await connectDB()

  // check if message exists
  const message = await Message.findById(messageId)

  if (!message) {
    throw new Error('Message not found')
  }

  // delete message
  await message.deleteOne()

  revalidatePath('/', 'layout')
}

export default deleteMessage