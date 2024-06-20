import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

//Import Needed Utils
import { verifyToken } from './../../../lib/signToken';


export async function GET(request: NextRequest){

    //Fetch Token, throw error if token does not exist
    const token = request.cookies.get('sessionToken');
    if (!token) return new NextResponse('Unauthorized', { status: 401 });

    //Verify token, fetch user details and throw error if doesn't exists
    const userDetails = verifyToken(token.value)
    if (!userDetails) return new NextResponse("Unauthorized", { status: 401 });

    //Return user details
    return NextResponse.json(userDetails)
}
