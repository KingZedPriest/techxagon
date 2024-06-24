import { prisma } from "@/lib/prismadb";

export default async function getAClass(id: string) {

  try {
    const getAClass = await prisma.class.findUnique({
      where: {
        id
      },
      include: {
        students: true,
        exams: true
      }
    });

    return getAClass;

  } catch (error: any) {
    console.error(error);
    throw error;
  }

}
