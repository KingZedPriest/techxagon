import { Table, TableCaption, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

const SchoolsTable = ({ schools }: { schools: any[] }) => {
  return (
    <Table className="mt-10">
      <TableCaption className="uppercase text-xs md:text-sm xl:text-base">List of schools.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">School Name</TableHead>
          <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">School Location</TableHead>
          <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">No of Teachers</TableHead>
          <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">No of Students</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {schools.map((school) => (
          <TableRow key={school.id}>
            <TableCell className="text-xs md:text-sm xl:text-base capitalize">{school.name}</TableCell>
            <TableCell className="text-xs md:text-sm xl:text-base capitalize">{school.location}</TableCell>
            <TableCell className="text-xs md:text-sm xl:text-base">{school.teachers.length}</TableCell>
            <TableCell className="text-xs md:text-sm xl:text-base">{school.students.length}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SchoolsTable;
