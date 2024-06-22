"use client"

import { useState, useEffect, ChangeEvent } from 'react';
import { toast } from 'sonner';
import { useTeacherStore } from '@/store/teacher';

//Import Needed Utils and Types
import { makeApiRequest } from '@/lib/apiUtils';
import { School } from '@/types/default';


const SchoolSelect = () => {
  const [selectedId, setSelectedId] = useState('');
  const [schools, setSchools] = useState<School[]>([]);
  const { updateSchoolId } = useTeacherStore();

  useEffect(() => {

    makeApiRequest("/getSchools", "get", "", {
        onSuccess: (response: any) => {
            // Handle success
            setSchools(response.data.data)
        },
        onError: (error: any) => {
            // Handle error
            toast.error(`${error.response.data || 'Error fetching schools'}, Please Try Again.`);
        },
    });
}, []);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedId(selectedValue);
    updateSchoolId(selectedValue);
    //console.log(selectedValue)
  };

  return (
    <main className='text-xs md:text-sm xl:text-base flex flex-col gap-y-1'>
      <label htmlFor="schoolSelect" className="cursor-pointer">Select School</label>
      <select
        id="schoolSelect"
        value={selectedId}
        onChange={handleChange}
        className="w-full px-2 xl:px-4 py-3 rounded-xl focus:border-inkBlue border bg-inherit focus:outline-none capitalize"
      >
        <option value="">Select a school</option>
        {schools.map((school) => (
          <option className='capitalize' key={school.id} value={school.id}>
            {school.name} {school.location}
          </option>
        ))}
      </select>
    </main>
  );
};

export default SchoolSelect;
