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

    if (getAClass) {
      // Sort the students by name in alphabetical order
      getAClass.students.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    }

    return getAClass;

  } catch (error: any) {
    console.error(error);
    throw error;
  }

}
