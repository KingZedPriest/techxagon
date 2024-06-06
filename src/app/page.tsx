
export default function Home() {
  return (
    <main>
        <h1>This is the main page</h1>
    </main>
  );
}



//Validation of data using Zod, inorder to maintain data types


// import { NextResponse, NextRequest } from 'next/server';
// import { prisma } from '@/lib/prismadb';
// import { z } from 'zod';

// const BeneficiarySchema = z.object({
//   userEmail: z.string().email(),
//   name: z.string(),
//   bankName: z.string(),
//   accountName: z.string(),
//   accountNumber: z.string(),
//   iban: z.string().optional(),
//   swiftcode: z.string().optional(),
//   routingNumber: z.string().optional(),
// });

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const parseResult = BeneficiarySchema.safeParse(body);

//     if (!parseResult.success) {
//       return NextResponse.json({ error: 'Invalid input', details: parseResult.error.errors }, { status: 400 });
//     }

//     const { userEmail, name, bankName, accountName, accountNumber, iban, swiftcode, routingNumber } = parseResult.data;

//     const lowercasedEmail = userEmail.toLowerCase();

//     const createBeneficiary = await prisma.beneficiary.create({
//       data: {
//         userEmail: lowercasedEmail,
//         name,
//         bankName,
//         accountName,
//         accountNumber,
//         iban,
//         swiftcode,
//         routingNumber,
//       },
//     });

//     return NextResponse.json(createBeneficiary);

//   } catch (error) {
//     console.error('Error creating beneficiary:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }
