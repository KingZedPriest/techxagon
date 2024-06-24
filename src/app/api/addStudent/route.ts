import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/lib/prismadb';

//Import Needed Types and Utils
import { FormData } from '@/schema/student.schema';


export async function POST(req: NextRequest, res: NextResponse) {
    const body: FormData = await req.json();

    try {
        const { name, regNumber, gender, email, classId, schoolId } = body;

        //Check if student with the same reg number exists in the school, and throw error
        const existingRegNumber = await prisma.student.findFirst({
            where: {
              regNumber,
              schoolId
            },
          });

        if (existingRegNumber) return new NextResponse('This Reg Number already exists in this school', { status: 409 })
        
        //Create a class then
        const newStudent = await prisma.student.create({
            data: {
                email,
                name,
                regNumber,
                gender,
                classId,
                schoolId,
            }
        })

        return NextResponse.json(newStudent, { status: 200 })

    } catch (error: any) {
        if (error instanceof Error) {
            return new NextResponse(error.message);
        } else {
            return new NextResponse('Internal Server Error', { status: 500 });
        }
    }
}