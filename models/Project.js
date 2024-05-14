import { Schema, model, models } from 'mongoose'

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    url: {
      type: String,
      required: [true, 'URL is required'],
    },
    github: [
      {
        type: String,
      },
    ],
    tech_stack: [
      {
        type: String,
      },
    ],
    images: [
      {
        type: String,
      },
    ],
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Project = models.Project || model('Project', ProjectSchema)

export default Project
