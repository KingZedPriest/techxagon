import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

export default async function createPassword(){
    const plainTextPassword = uuidv4(); // Generate UUID
    const hashedPassword = await bcrypt.hash(plainTextPassword, 10);
    
    return hashedPassword
}