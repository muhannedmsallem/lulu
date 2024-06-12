// app/api/sanity/signUp/route.ts
import { signUpHandler } from 'next-auth-sanity';
import { client } from '../../../../sanity';

export const POST = signUpHandler(client);