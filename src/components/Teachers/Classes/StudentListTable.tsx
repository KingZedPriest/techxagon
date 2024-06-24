import { Table, TableCaption, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

const StudentListTable = ({ students, className }: { students: any[], className: string }) => {

  return (
    <Table className="mt-10">
      <TableCaption className="uppercase text-xs md:text-sm xl:text-base">List of students in {className}.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">Name</TableHead>
          <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">Reg Number</TableHead>
          <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">Gender</TableHead>
          <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">Attendance %</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell className="text-xs md:text-sm xl:text-base capitalize">{student.name}</TableCell>
            <TableCell className="text-xs md:text-sm xl:text-base">{student.regNumber}</TableCell>
            <TableCell className="text-xs md:text-sm xl:text-base capitalize">{student.gender}</TableCell>
            <TableCell className="text-xs md:text-sm xl:text-base capitalize">Unavailable</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentListTable;
