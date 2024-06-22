import { prisma } from "@/lib/prismadb";

export default async function getAllStudents(id: string) {

    try {
        const getAllStudents = await prisma.student.findMany({
            where: {
                schoolId: id
            },
            orderBy: {
                createdAt: "desc"
            }
        });

        return getAllStudents;

    } catch (error: any) {
        console.error(error);
        throw error;
    }

}
