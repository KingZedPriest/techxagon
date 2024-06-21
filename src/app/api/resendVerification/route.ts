import { prisma } from '@/lib/prismadb';
import { NextRequest, NextResponse } from 'next/server';

//Import Needed Email Template and Utils and Libraries
import LoginAuthenticationTemplate from '../../../../emails/LoginAuthenticationTemplate';
import { render } from '@react-email/components';
import { sendEmail } from '@/lib/email';
import { generateSecureCode } from '@/lib/generateSecureCode';


export async function POST(req: NextRequest, res: NextResponse) {

    const body = await req.json();

    try {
        
        const { email } = body;

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
    
        return NextResponse.json({ success: "Email was resent successfully" }, { status: 200 })

    } catch (error: any) {

        if (error instanceof Error) {
            return new NextResponse(error.message);
          } else {
            return new NextResponse('Internal Server Error', { status: 500 });
          }
    }

}
export async function resendVerification(email: string){

    

    
    

    

    

    
}
