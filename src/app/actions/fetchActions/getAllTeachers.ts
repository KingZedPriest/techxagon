import { prisma } from "@/lib/prismadb";

export default async function getTeachers() {

  try {
    const getTeachers = await prisma.teacher.findMany({
      orderBy: {
        createdAt: "desc"
    }
    });

    return getTeachers;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }

}
