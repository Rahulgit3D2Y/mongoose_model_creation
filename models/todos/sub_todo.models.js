import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    contnet: {
      type: string,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { timestamps: true }
);

export const subTodo = mongoose.model('subtodo', subTodoSchema);
