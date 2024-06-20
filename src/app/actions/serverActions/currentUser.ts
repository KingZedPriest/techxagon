"use server"
import { permanentRedirect, RedirectType } from 'next/navigation';
import { cookies } from 'next/headers'

//Import Needed Utils
import { verifyToken } from '@/lib/signToken';

//Import Needed Types
import { UserDetails } from '@/types/default';


export async function getCurrentUser(){

    //Fetch Token, throw error if token does not exist
    const token = cookies().get('sessionToken')?.value
    if (!token) return permanentRedirect("/authentication", RedirectType.replace)

    //Verify token, fetch user details and throw error if doesn't exists
    const userDetails = verifyToken(token)
    if (!userDetails) return permanentRedirect("/authentication", RedirectType.replace)

    //Return user details
    return userDetails as UserDetails;

}
