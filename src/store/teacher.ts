import { create } from 'zustand';

type teacherStore = {

    schoolId: string;
    updateSchoolId: (newId: string) => void;
}

export const useTeacherStore = create<teacherStore>()((set) => ({

    schoolId: "",
    updateSchoolId: (newId: string) => set({schoolId : newId })
 }))