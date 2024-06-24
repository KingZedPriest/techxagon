import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/lib/prismadb';


export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();

    try {
        const { name, schoolId } = body;

        //Check if class exists, and throw error
        const existingClass = await prisma.class.findFirst({
            where: {
              name,
              schoolId
            },
          });
        if (existingClass) return new NextResponse('This class already exists in this school', { status: 409 })
        
        //Create a class then
        const newClass = await prisma.class.create({
            data: {
                name,
                schoolId,
            }
        })

        return NextResponse.json(newClass, { status: 200 })

    } catch (error: any) {
        if (error instanceof Error) {
            return new NextResponse(error.message);
        } else {
            return new NextResponse('Internal Server Error', { status: 500 });
        }
    }
}