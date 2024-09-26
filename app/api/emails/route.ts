import { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

import nodemailer from 'nodemailer';

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
 
import connect from "@/utils/db";
 

const transporter = nodemailer.createTransport({
    
    host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export const POST = async (request: NextRequest) => {
  
  await connect();

  try {
 
    const { to, subject, text,html } = await request.json();

    console.log(to);
    
    try {
       const newmel = await transporter.sendMail({
            from:  process.env.EMAIL_USER,
            to,
            subject,
            text,
            html 
          });
  console.log(newmel);
  
        return new NextResponse(JSON.stringify({ success: true }), { status: 201 });
      } catch (error: unknown) {
        console.error('Error sending email:', error);
        return new NextResponse(JSON.stringify({ success: false, message: 'Error sending email' }), {
            status: 500,
          });
      }

  } catch (error: unknown) {
    console.error('Error processing request:', error);
    return new NextResponse(JSON.stringify({ success: false, message: 'Error processing request' }), {
        status: 500,
      });
  }
};