import { NextResponse } from 'next/server';

export const GET = async (req) => {
  try {
    const res = await fetch('https://crackit-k24x.onrender.com/wake', {
      method: 'GET'
    });

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ status: 400, message: "Something Went Wrong" });
  }
}