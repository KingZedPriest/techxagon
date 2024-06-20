import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";

const CreateNew = () => {
    return ( 
        <Select>
            <SelectTrigger className="w-[8rem] md:w-[10rem] xl:w-[12rem] bg-inherit border border-slate-300 rounded-lg text-xs md:text-sm xl:text-base">
              <SelectValue placeholder="Create New" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="text-xs md:text-sm xl:text-base" value="school">School</SelectItem>
              <SelectItem className="text-xs md:text-sm xl:text-base" value="student">Student</SelectItem>
              <SelectItem className="text-xs md:text-sm xl:text-base" value="exam">Examination</SelectItem>
            </SelectContent>
        </Select>

     );
}
 
export default CreateNew;
