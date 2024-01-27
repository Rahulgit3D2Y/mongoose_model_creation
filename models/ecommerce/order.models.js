import mongoose from 'mongoose';
const orderItemSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
  },
  quantity: {
    type: number,
    required: true,
  },
});
const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    orderItems: {
      type: [orderItemSchema],
    },
  },
  { timestamps: true }
);

export const order = mongoose.model('order', orderSchema);
