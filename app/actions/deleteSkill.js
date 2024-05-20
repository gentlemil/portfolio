'use server'
import { revalidatePath } from 'next/cache'
import connectDB from '@/config/database'
import { getSessionUser } from '@/utils/getSessionUser'
import Skill from '@/models/Skill'

async function deleteSkill(skillId) {
  // check if user is authenticated
  const sessionUser = await getSessionUser()

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('You are not authenticated')
  }

  await connectDB()

  // check if message exists
  const skill = await Skill.findById(skillId)

  if (!skill) {
    throw new Error('Skill not found')
  }

  // delete skill
  await skill.deleteOne()

  revalidatePath('/', 'layout')
}

export default deleteSkill
