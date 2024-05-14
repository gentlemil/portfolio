import { Schema, model, models } from 'mongoose'

const MessageSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    phone: {
      type: String,
    },
    content: {
      type: String,
      required: [true, 'Message is required'],
    },
    is_read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Message = models.Message || model('Message', MessageSchema)

export default Message
