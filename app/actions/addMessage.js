'use server'

import connectDB from '@/config/database'
import Message from '@/models/Message'
import { revalidatePath } from 'next/cache'

async function addMessage(prevState, formData) {
  await connectDB()

  const newMessage = new Message({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  })

  await newMessage.save()

  // revalidate cache
  revalidatePath('/user/messages', 'page')

  return { submitted: true }
}

export default addMessage
