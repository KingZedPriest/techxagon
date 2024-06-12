import { prisma } from '@/lib/prismadb';
import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'
import { redirect } from 'next/navigation'

//Utils, Libraries, and types
import { generateSecureCode } from '@/lib/generateSecureCode';
import { sendEmail } from "@/lib/email";
import { render } from '@react-email/components';
import { FormData, emailSchema } from '@/lib/validation';

//Templates
import LoginAuthenticationTemplate from '../../../../emails/LoginAuthenticationTemplate';


export async function POST(request: NextRequest) {

    const body: FormData = await request.json();

    try {

        if (!emailSchema.parse(body)){
            return NextResponse.json('Data Validation Error', { status: 400 })
        }

        const { email, subject } = body;

        //Generate the code
        const code: string = generateSecureCode();

        //Convert the email template
        const emailHtml = render(LoginAuthenticationTemplate({ verificationCode: code }))

        // Save the code and email in the database with an expiry date
        const newVerification = await prisma.verificationCode.create({
          data: {
            email,
            code,
            expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes expiry
          },
        });
    
        sendEmail({
          to : email,
          subject : subject!,
          html: emailHtml,
        });

        redirect("/verify")
        return NextResponse.json(newVerification)

    } catch (error) {
        if (error instanceof Error) {
          return new NextResponse(error.message);
        } else {
          return new NextResponse('Internal Server Error', { status: 500 });
        }
    }
}

  

