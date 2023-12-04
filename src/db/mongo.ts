import { MONGODB_URI } from '../config/config';

import { connect } from 'mongoose';

export const connectDB = async () => {
  const DB_URI = <string>MONGODB_URI;
  try {
    await connect(DB_URI);
    // console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};
