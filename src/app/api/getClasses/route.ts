import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/lib/prismadb';
import { AvailableClasses } from '@prisma/client';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    
    const page: number = parseInt(searchParams.get('page') || '1', 10);
    const limit: number = parseInt(searchParams.get('limit') || '10', 10);
    const search: string = searchParams.get('search') || '';
    const id: string = searchParams.get('id') || '';

    const skip = (page - 1) * limit;

    try {
        const AVAILABLE_CLASSES: AvailableClasses[] = [
            "JSS1A", "JSS1B", "JSS1C", "JSS1D", "JSS1E", 
            "JSS2A", "JSS2B", "JSS2C", "JSS2D", "JSS2E",
            "JSS3A", "JSS3B", "JSS3C", "JSS3D", "JSS3E", 
            "SS1A", "SS1B", "SS1C", "SS1D", "SS1E",
            "SS2A", "SS2B", "SS2C", "SS2D", "SS2E", 
            "SS3A", "SS3B", "SS3C", "SS3D", "SS3E"
        ];

        if (search) {
            const searchLowerCase = search.toLowerCase();
            const filteredClasses: AvailableClasses[] = AVAILABLE_CLASSES.filter(className => 
                className.toLowerCase().includes(searchLowerCase)
            ) as AvailableClasses[];

            const classes = await prisma.class.findMany({
                where: {
                    schoolId: id,
                    name: {
                        in: filteredClasses,
                    },
                },
                include: {
                    students: true,
                    exams: true 
                },
                skip,
                take: limit,
            });

            const totalClasses = await prisma.class.count({
                where: {
                    schoolId: id,
                    name: {
                        in: filteredClasses,
                    },
                },
            });

            return NextResponse.json({ data: classes, total: totalClasses, page, limit });
        }

        const classes = await prisma.class.findMany({
            where: {
                schoolId: id,
            },
            orderBy: {
                createdAt: "desc"
            },
            include: {
                students: true,
                exams: true 
            },
            skip,
            take: limit,
        });

        const sortedClasses = classes.sort((a, b) => AVAILABLE_CLASSES.indexOf(a.name as AvailableClasses) - AVAILABLE_CLASSES.indexOf(b.name as AvailableClasses));

        const totalClasses = await prisma.class.count({
            where: {
                schoolId: id,
            },
        });

        return NextResponse.json({ data: sortedClasses, total: totalClasses, page, limit });
        
    } catch (error: any) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
