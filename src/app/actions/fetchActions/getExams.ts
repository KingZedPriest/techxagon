import { prisma } from "@/lib/prismadb";

export default async function getExams() {

  try {
    const getExams = await prisma.exam.findMany({
      orderBy: {
        createdAt: "desc"
    }
    });

    return getExams;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }

}
