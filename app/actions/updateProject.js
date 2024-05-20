'use server'
import connectDB from '@/config/database'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import Project from '@/models/Project'
import cloudinary from '@/config/cloudinary'
import { getSessionUser } from '@/utils/getSessionUser'

async function updateProject(projectId, formData) {
  await connectDB()
  // check if user is logged
  const sessionUser = await getSessionUser()

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('You must be logged in to add a project')
  }

  // check if project exists
  const existingProject = await Project.findById(projectId)

  if (!existingProject) {
    throw new Error('Project not found')
  }

  const github = formData.getAll('github').filter((link) => link !== '')
  const tech_stack = formData.getAll('tech_stack').filter((tech) => tech !== '')

  const projectData = {
    name: formData.get('name'),
    description: formData.get('description'),
    url: formData.get('url'),
    github,
    tech_stack,
    status: formData.get('status') === 'on' ? true : false,
  }

  // check if images are provided
  const images = formData.getAll('images').filter((image) => image.name !== '')

  if (images.length > 0 && images[0].name !== 'undefined') {
    // if new image has been provided, remove the old images
    const publicIds = existingProject.images.map((imageUrl) => {
      const parts = imageUrl.split('/')
      return parts.at(-1).split('.').at(0)
    })

    // delete images from Cloudinary
    if (publicIds.length > 0) {
      for (let publicId of publicIds) {
        await cloudinary.uploader.destroy('portfolio/' + publicId)
      }
    }

    // upload new images
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
  } else {
    // if images are not provided, use the existing images
    projectData.images = existingProject.images
  }

  // update the project
  await Project.findByIdAndUpdate(projectId, projectData)

  // revalidate the cache
  revalidatePath('/user', 'layout')

  redirect(`/user/projects`)
}

export default updateProject
