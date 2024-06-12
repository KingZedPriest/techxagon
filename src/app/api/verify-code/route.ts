import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismadb';
import { cookies } from 'next/headers';

// Import Utils, libraries and types
import { FormData, verifySchema } from '@/schema/verify.schema';
import { encrypt } from '@/lib/hashToken';

export async function POST(request: NextRequest, response: NextResponse) {
  const body: FormData = await request.json();

  try {

    try {
        verifySchema.parse(body);
      } catch (e) {
        console.log("Validation Error" + e)
        return new NextResponse('Incorrect Verification Code', { status: 400 });
      }
    
    // Destructure the object
    const { email, code } = body;

    // Look for the code 
    const verificationCode = await prisma.verificationCode.findUnique({
      where: { email_code: { email, code } },
    });
    
    // If the verification code is not correct
    if (verificationCode?.code !== code) return new NextResponse('Incorrect Verification Code', { status: 401 }); 

    // If the verification code is expired
    if (verificationCode.expiresAt < new Date()) return new NextResponse("Sorry, expired code, kindly request for a new one.", { status: 401 });

    // Check who is trying to log
    const admin = await prisma.admin.findUnique({ where: { email } });
    const teacher = await prisma.teacher.findUnique({ where: { email } });

    if (!admin && !teacher) return new NextResponse("We couldn't find an account associated with the email address you entered.", { status: 403 });

    const validatedUser = admin || teacher;
    const data = encrypt(validatedUser!, process.env.SECRET_KEY!);

    if (verificationCode && verificationCode.expiresAt > new Date()) {
      // Log the user in by setting a session cookie
      cookies().set({
        name: 'sessionToken',
        value: data,
        httpOnly: true,
        path: '/',
        expires: 24 * 60 * 60, // Expires in 24 Hours
      });

      // Delete the code to prevent reuse
      await prisma.verificationCode.delete({
        where: { email_code: { email, code } },
      });

      return NextResponse.json(validatedUser);
    }
  } catch (error: any) {
    if (error instanceof Error) {
      return new NextResponse(error.message);
    } else {
      return new NextResponse('Internal Server Error', { status: 500 });
    }
  }
}
