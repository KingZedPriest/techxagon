import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/lib/prismadb';

//Import Needed Utils, Libraries and 
import { FormData } from '@/schema/school.schema';

export async function POST(req: NextRequest, res: NextResponse) {
    const body: FormData = await req.json();

    try {
        const { name, location, motto } = body;

        const lowerCasedName = name.toLowerCase()

        const newSchool = await prisma.school.create({
            data: {
                name: lowerCasedName,
                location,
                motto
            }
        })

        return NextResponse.json(newSchool, { status: 200 })

    } catch (error: any) {
        if (error instanceof Error) {
            return new NextResponse(error.message);
        } else {
            return new NextResponse('Internal Server Error', { status: 500 });
        }
    }
}