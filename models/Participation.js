import { Schema, model, models } from 'mongoose'

const ParticipationSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Title is required'],
    },
    url: {
      type: String,
      required: [true, 'URL is required'],
    },
    images: [
      {
        type: String,
      },
    ],
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

const Participation =
  models.Participation || model('Participation', ParticipationSchema)

export default Participation
