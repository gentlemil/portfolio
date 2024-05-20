'use server'
import { revalidatePath } from 'next/cache'
import connectDB from '@/config/database'
import cloudinary from '@/config/cloudinary'
import { getSessionUser } from '@/utils/getSessionUser'
import Project from '@/models/Project'

async function deleteProject(projectId) {
  // check if user is authenticated
  const sessionUser = await getSessionUser()

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('You are not authenticated')
  }

  await connectDB()

  // delete project
  const project = await Project.findById(projectId)

  if (!project) {
    throw new Error('Project not found')
  }

  // extract public id's from image url in DB
  const publicIds = project.images.map((imageUrl) => {
    const parts = imageUrl.split('/')
    return parts.at(-1).split('.').at(0)
  })

  // delete images from Cloudinary
  if (publicIds.length > 0) {
    for (let publicId of publicIds) {
      await cloudinary.uploader.destroy('portfolio/' + publicId)
    }
  }

  await project.deleteOne()

  revalidatePath('/', 'layout')
}

export default deleteProject
