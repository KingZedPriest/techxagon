import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/lib/prismadb';
import  bcrypt  from 'bcrypt';

//Import Needed Utils, Libraries and 
import { FormData } from '@/schema/teacher.schema'; 
import { render } from '@react-email/components';
import { sendEmail } from '@/lib/email';

//Import Needed Templates
import TeacherInvitationTemplate from '../../../../emails/TeacherInvitationTemplate';



export async function POST(req: NextRequest, res: NextResponse){
    const body: FormData = await req.json();

    try {
        const { name, email, hashedPassword, schoolId } = body;

        const lowerCasedName = name.toLowerCase()
        const lowerCasedEmail = email.toLowerCase()
        const newHashedPassword = await bcrypt.hash(hashedPassword!, 12);

        const newTeacher = await prisma.teacher.create({
            data: {
                name: lowerCasedName,
                email: lowerCasedEmail,
                hashedPassword: newHashedPassword!,
                schoolId,
            },
        });

        const emailHtml = render(TeacherInvitationTemplate({ password: hashedPassword, name: lowerCasedName }))

        sendEmail({
            to : lowerCasedEmail,
            subject : "Invitation",
            html: emailHtml,
          });

        return NextResponse.json(newTeacher, { status: 200 })

    } catch (error: any) {
        if (error instanceof Error) {
            return new NextResponse(error.message);
        } else {
            return new NextResponse('Internal Server Error', { status: 500 });
        }
    }
}