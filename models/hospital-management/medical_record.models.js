import mongoose from 'mongoose';

const medicalr = new mongoose.Schema({}, { timestamps: true });

export const Medicalr = mongoose.model('medicalr', medicalr);
