import { prisma } from "@/lib/prismadb";

export default async function getSchools() {

  try {
    const getSchools = await prisma.school.findMany({
      orderBy: {
        createdAt: "desc"
    }
    });

    return getSchools;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }

}
