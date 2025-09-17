import { NextResponse } from 'next/server';

export const GET = async (req) => {
  try {

    fetch('https://crackit-k24x.onrender.com/wake', {
        method : 'GET'
    })

  } catch {
    return NextResponse.json({ status: 400, message: "Something Went Wrong" })
  }

  return NextResponse.json({ status: 200, message: "Message Sent Successfully" })
}