import { NextResponse } from 'next/server';
import DM from '@/app/models/DirectMessage';
import mongoose from 'mongoose';

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(`${process.env.MONGODB_URI}portfolio`);
  }
}

export const POST = async (req) => {
  const { name, message } = await req.json()

  if (!name || !message) {
    return NextResponse.json({
      status: 500,
      message: "Invalid credentials"
    })
  }

  try {
    connectDB();

    const newDM = new DM({
      name,
      message
    });

    await newDM.save()
  } catch {
    return NextResponse.json({ status: 400, message: "Something Went Wrong" })
  }

  return NextResponse.json({ status: 200, message: "Message Sent Successfully" })
}