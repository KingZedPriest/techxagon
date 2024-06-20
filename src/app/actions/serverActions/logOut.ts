'use server'

import { cookies } from 'next/headers'
import { RedirectType, permanentRedirect } from 'next/navigation'

export async function logOut() {
    
    cookies().delete('sessionToken')
    const token = cookies().get('sessionToken')?.value
    if (!token) return permanentRedirect("/authentication", RedirectType.replace)
}