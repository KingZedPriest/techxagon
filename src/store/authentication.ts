import { create } from 'zustand';

type onboardingStore = {

    email: string | any;
    updateEmail: (newEmail: string | any) => void;
}

export const useOnboardingStore = create<onboardingStore>((set) => ({

    email: "",
    updateEmail: (newEmail: string | any) => set({email : newEmail })
 }))