import { create } from 'zustand';

type authenticationStore = {

    email: string | any;
    updateEmail: (newEmail: string | any) => void;
}

export const useAuthenticationStore = create<authenticationStore>((set) => ({

    email: "",
    updateEmail: (newEmail: string | any) => set({email : newEmail })
 }))