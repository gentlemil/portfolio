'use server'
import connectDB from '@/config/database'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { getSessionUser } from '@/utils/getSessionUser'
import Message from '@/models/Message'

async function answeredMessage(messageId, is_answered) {
  await connectDB()
  // check if user is logged
  const sessionUser = await getSessionUser()

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('You must be logged in to add a project')
  }

  // check if project exists
  const existingMessage = await Message.findById(messageId)

  if (!existingMessage) {
    throw new Error('Message not found')
  }

  const messageData = {
    is_read: !is_answered,
  }

  // update the message
  await Message.findByIdAndUpdate(messageId, messageData)

  // revalidate the cache
  revalidatePath('/user', 'layout')

  redirect(`/user/messages`)
}

export default answeredMessage
