import { create } from 'zustand';

type authenticationStore = {

    email: string;
    updateEmail: (newEmail: string) => void;
}

export const useAuthenticationStore = create<authenticationStore>()((set) => ({

    email: "",
    updateEmail: (newEmail: string) => set({email : newEmail })
 }))