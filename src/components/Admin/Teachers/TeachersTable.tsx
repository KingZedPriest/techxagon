import { Table, TableCaption, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

const TeachersTable = ({ teachers }: { teachers: any[] }) => {
  return (
    <Table className="mt-10">
      <TableCaption className="uppercase text-xs md:text-sm xl:text-base">List of teachers.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">Name</TableHead>
          <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">Email</TableHead>
          <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">School</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teachers.map((teacher) => (
          <TableRow key={teacher.id}>
            <TableCell className="text-xs md:text-sm xl:text-base capitalize">{teacher.name}</TableCell>
            <TableCell className="text-xs md:text-sm xl:text-base">{teacher.email}</TableCell>
            <TableCell className="text-xs md:text-sm xl:text-base capitalize">{teacher.school.name} {teacher.school.location}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TeachersTable;
