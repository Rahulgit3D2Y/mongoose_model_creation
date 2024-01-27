import mongoose, { Mongoose } from 'mongoose';

const doctor = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      default: 0,
    },
    wordsInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
    ],
  },
  { timestamps: true }
);

export const doctor = mongoose.model('doctor', doctor);
