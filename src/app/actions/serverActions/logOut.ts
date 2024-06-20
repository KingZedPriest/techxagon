'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function logOut() {
    // Delete the session token
    cookies().delete('sessionToken')

    // Redirect to the authentication page
    redirect('/authentication')

    // This line will never be reached, but it's good practice to return something
    return { success: true }
}