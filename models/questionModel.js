import mongoose from 'mongoose'

const questionSchema = mongoose.Schema(
  {
    task: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("question", questionSchema);