import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const SchoolList = () => {
    return (
        <main className="text-xs md:text-sm xl:text-base">
            <input type="search" name="school" id="school" placeholder="Enter the name of the school" className="w-full py-3 rounded-xl px-4 bg-inherit border border-slate-300 focus:border-4 focus:outline-none focus:border-inkBlue focus:border-opacity-50" />
            <Table className="mt-10">
                <TableCaption className="uppercase text-xs md:text-sm xl:text-base">List of schools.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">SCHOOL NAME</TableHead>
                        <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">SCHOOL location</TableHead>
                        <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">NO OF TEACHERS</TableHead>
                        <TableHead className="font-semibold text-inkBlue uppercase text-xs md:text-sm xl:text-base">NO OF STUDENT</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="text-xs md:text-sm xl:text-base"></TableCell>
                        <TableCell className="text-xs md:text-sm xl:text-base"></TableCell>
                        <TableCell className="text-xs md:text-sm xl:text-base"></TableCell>
                        <TableCell className="text-xs md:text-sm xl:text-base"></TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </main>
    );
}

export default SchoolList;