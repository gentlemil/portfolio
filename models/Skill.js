import { Schema, model, models } from 'mongoose'

const SkillSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Skill name is required'],
      unique: [true, 'Skill name already exists'],
    },
    type: {
      type: String,
      required: [true, 'Skill type is required'],
      enum: ['frontend', 'backend', 'database', 'devops', 'other'],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

const Skill = models.Skill || model('Skill', SkillSchema)

export default Skill
