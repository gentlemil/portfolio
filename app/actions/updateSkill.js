'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import connectDB from '@/config/database'
import Skill from '@/models/Skill'
import { getSessionUser } from '@/utils/getSessionUser'

async function updateSkill(skillId, formData) {
  await connectDB()
  // check if user is logged
  const sessionUser = await getSessionUser()

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('You must be logged in to add a project')
  }

  // check if skill exists
  const existingSkill = await Skill.findById(skillId)

  if (!existingSkill) {
    throw new Error('Skill not found')
  }

  const skillData = {
    name: formData.get('name'),
    type: formData.get('type'),
    status: formData.get('status') === 'on' ? true : false,
  }

  // update the skill
  await Skill.findByIdAndUpdate(skillId, skillData)

  // revalidate the cache
  revalidatePath('/user', 'layout')

  redirect(`/user/skills/`)
}

export default updateSkill
