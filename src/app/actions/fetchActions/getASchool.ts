import { prisma } from "@/lib/prismadb";

export default async function getASchool(id: string) {

  try {
    const getASchool = await prisma.school.findUnique({
      where: {
        id
      },
      include: {
        students: true,
        classes: true,
        exams: true
      }
    });

    return getASchool;

  } catch (error: any) {
    console.error(error);
    throw error;
  }

}
