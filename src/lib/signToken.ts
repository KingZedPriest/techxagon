import jwt from 'jsonwebtoken';

// Sign token
export const signToken = (data: object) => {

  const token = jwt.sign(data, process.env.SECRET_KEY!)
  return token
};

// Verify token
export const verifyToken = (token: any) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY!);
    return decoded

  } catch (error) {
    return null
  }

}

