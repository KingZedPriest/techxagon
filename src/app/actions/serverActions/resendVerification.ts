"use server"
import { prisma } from '@/lib/prismadb';
import { permanentRedirect } from 'next/navigation';
import { NextResponse } from 'next/server';

//Import Needed Email Template and Utils and Libraries
import LoginAuthenticationTemplate from '../../../../emails/LoginAuthenticationTemplate';
import { render } from '@react-email/components';
import { sendEmail } from '@/lib/email';
import { generateSecureCode } from '@/lib/generateSecureCode';

export async function resendVerification(email: string){

    const verificationCode = await prisma.verificationCode.findFirst({
        where: {email}
    });

    if (!verificationCode) {
        permanentRedirect(`/authentication`) 
    }
    //Generate the code
    const code: string = generateSecureCode();

    // Save the code and email in the database with an expiry date
    await prisma.verificationCode.create({
        data: {
          email,
          code,
          expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes expiry
        },
      });

    const emailHtml = render(LoginAuthenticationTemplate({ verificationCode: code }))

    sendEmail({
        to : email,
        subject : "Verification",
        html: emailHtml,
      });

    return new NextResponse("Email was resent successfully", { status: 200 })
}
