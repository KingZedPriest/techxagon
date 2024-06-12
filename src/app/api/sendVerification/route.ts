import { prisma } from '@/lib/prismadb';
import { NextResponse, NextRequest } from "next/server";

//Utils, Libraries, and types
import { generateSecureCode } from '@/lib/generateSecureCode';
import { sendEmail } from "@/lib/email";
import { render } from '@react-email/components';
import { FormData, emailSchema } from '@/schema/auth.schema';

//Templates
import LoginAuthenticationTemplate from '../../../../emails/LoginAuthenticationTemplate';


export async function POST(request: NextRequest) {

    const body: FormData = await request.json();

    try {

        try {
          emailSchema.parse(body);
        } catch (e) {
          return new NextResponse('Data Validation Error', { status: 400 });
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

        return NextResponse.json(newVerification)

    } catch (error) {
        if (error instanceof Error) {
          return new NextResponse(error.message);
        } else {
          return new NextResponse('Internal Server Error', { status: 500 });
        }
    }
}

  

