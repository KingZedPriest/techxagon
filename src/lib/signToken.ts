import jwt from 'jsonwebtoken';

// Sign token
export const signToken = (data: object) => {

  const token = jwt.sign(data, process.env.SECRET_KEY!)
  return token
}
;

// Verify token
export const verifyToken = (token : string) => {
  const decoded = jwt.verify(token, process.env.SECRET_KEY!);
  return decoded
}

