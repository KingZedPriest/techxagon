//Import Needed Actions
import getAClass from "@/app/actions/fetchActions/getAClass";

export const revalidate = 0;
const page = async ({ params }: { params: { id: string } }) => {
  
  const classId = params.id;
  const classDetails = await getAClass(classId)

  console.log({classDetails})
}


export default page;