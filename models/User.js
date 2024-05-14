import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email already exists'],
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
)

const User = models.User || model('User', UserSchema)

export default User
