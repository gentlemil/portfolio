'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import connectDB from '@/config/database'
import Skill from '@/models/Skill'

async function addSkill(formData) {
  await connectDB()

  const newSkill = new Skill({
    name: formData.get('name'),
    type: formData.get('type'),
  })

  await newSkill.save()

  // revalidate cache
  revalidatePath('/', 'layout')

  redirect(`/user/skills`)
}

export default addSkill
