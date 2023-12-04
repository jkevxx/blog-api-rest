import { Schema, model } from 'mongoose';

const OrderSchema = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const OrderModel = model('orders', OrderSchema);

export default OrderModel;
