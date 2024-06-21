import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/lib/prismadb';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const page: number = parseInt(searchParams.get('page') || '1', 10);
    const limit: number = parseInt(searchParams.get('limit') || '10', 10);
    const search: string = searchParams.get('search') || '';

    const skip = (page - 1) * limit;

    try {
        if (search) {
            const schools = await prisma.school.findMany({
                where: {
                    name: {
                        contains: search,
                        mode: 'insensitive',
                    },
                },
                skip,
                take: limit,
            });

            const totalSchools = await prisma.school.count({
                where: {
                    name: {
                        contains: search,
                        mode: 'insensitive',
                    },
                },
            });

            return NextResponse.json({ data: schools, total: totalSchools, page, limit });
        }

        const schools = await prisma.school.findMany({
            orderBy: {
                createdAt: "desc"
            },
            skip,
            take: limit,
        });

        const totalSchools = await prisma.school.count();

        return NextResponse.json({ data: schools, total: totalSchools, page, limit });
        
    } catch (error: any) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
