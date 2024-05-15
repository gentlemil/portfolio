'use server'
import connectDB from '@/config/database'
import Participation from '@/models/Participation'
import cloudinary from '@/config/cloudinary'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { getSessionUser } from '@/utils/getSessionUser'

async function addParticipation(formData) {
  await connectDB()

  const sessionUser = await getSessionUser()

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('You must be logged in to add a participation project')
  }

  const images = formData.getAll('images').filter((image) => image.name !== '')

  const participationData = {
    name: formData.get('name'),
    url: formData.get('url'),
  }

  const imageUrls = []

  for (const imageFile of images) {
    const imageBuffer = await imageFile.arrayBuffer()
    const imageArray = Array.from(new Uint8Array(imageBuffer))
    const imageData = Buffer.from(imageArray)

    // convert the image data to base64
    const imageBase64 = imageData.toString('base64')

    // make request to upload to Cloudinary
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder: 'portfolio/participations',
      }
    )

    imageUrls.push(result.secure_url)
  }

  participationData.images = imageUrls

  const newParticipation = new Participation(participationData)
  await newParticipation.save()

  // revalidate the cache
  revalidatePath('/', 'layout')

  redirect(`/user/participations/add`)
}

export default addParticipation
