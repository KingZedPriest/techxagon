import Link from 'next/link';
import { Table, TableCaption, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';


const ClassTable = ({ classes }: { classes: any[] }) => {

  return (
    <Table className="mt-10">
      <TableCaption className="uppercase text-xs md:text-sm xl:text-base">Class List</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">Class Name</TableHead>
          <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">No of Student</TableHead>
          <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">Male/Female</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {classes.length !== 0 && classes.map((list) => (
          <TableRow key={list.id} className='hover:bg-slate-300 duration-300 cursor-pointer'>
            <TableCell className="text-xs md:text-sm xl:text-base capitalize hover:font-medium duration-300"><Link href={`/teacher/classes/${list.id}`}>{list.name}</Link></TableCell>
            <TableCell className="text-xs md:text-sm xl:text-base capitalize hover:font-medium duration-300"><Link href={`/teacher/classes/${list.id}`}>{list.students.length}</Link></TableCell>
            <TableCell className="text-xs md:text-sm xl:text-base hover:font-medium duration-300"><Link href={`/teacher/classes/${list.id}`}>0</Link></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClassTable;
