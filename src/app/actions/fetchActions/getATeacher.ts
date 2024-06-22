import { prisma } from "@/lib/prismadb";

export default async function getATeacher(id: string) {

    try {
        const getATeacher = await prisma.teacher.findUnique({
            where: {
                id
            },
            include: {
                school: true
            },
        });

        return getATeacher;

    } catch (error: any) {
        console.error(error);
        throw error;
    }

}
