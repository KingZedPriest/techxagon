import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/lib/prismadb';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    
    const page: number = parseInt(searchParams.get('page') || '1', 10);
    const limit: number = parseInt(searchParams.get('limit') || '10', 10);
    const search: string = searchParams.get('search') || '';

    const skip = (page - 1) * limit;

    try {
        if (search) {
            const teachers = await prisma.teacher.findMany({
                where: {
                    name: {
                        contains: search,
                        mode: 'insensitive',
                    },
                },
                include: {
                    school: true
                },

                skip,
                take: limit,
            });

            const totalTeachers = await prisma.teacher.count({
                where: {
                    name: {
                        contains: search,
                        mode: 'insensitive',
                    },
                },
            });

            return NextResponse.json({ data: teachers, total: totalTeachers, page, limit });
        }

        const teachers = await prisma.teacher.findMany({
            orderBy: {
                createdAt: "desc"
            },

            include: {
                school: true
            },

            skip,
            take: limit,
        });

        const totalTeachers = await prisma.teacher.count();

        return NextResponse.json({ data: teachers, total: totalTeachers, page, limit });
        
    } catch (error: any) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
