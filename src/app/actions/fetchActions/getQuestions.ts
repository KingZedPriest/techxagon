import { prisma } from "@/lib/prismadb";

export default async function getQuestions() {

  try {
    const getQuestions = await prisma.question.findMany({
      orderBy: {
        createdAt: "desc"
    }
    });

    return getQuestions;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }

}
