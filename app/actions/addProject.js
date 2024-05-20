'use server'
import connectDB from '@/config/database'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import Project from '@/models/Project'
import cloudinary from '@/config/cloudinary'
import { getSessionUser } from '@/utils/getSessionUser'

async function addProject(formData) {
  await connectDB()

  const sessionUser = await getSessionUser()

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('You must be logged in to add a project')
  }

  const images = formData.getAll('images').filter((image) => image.name !== '')

  const projectData = {
    name: formData.get('name'),
    description: formData.get('description'),
    url: formData.get('url'),
    github: formData.get('github'),
    tech_stack: formData.getAll('tech_stack'),
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
        folder: 'portfolio/projects',
      }
    )

    imageUrls.push(result.secure_url)
  }

  projectData.images = imageUrls

  const newProperty = new Project(projectData)
  await newProperty.save()

  // revalidate the cache
  revalidatePath('/', 'layout')

  redirect(`/user/projects`)
}

export default addProject
