import {client} from '../../sanity';

export async function registerUser({ email, password, name }) {
  try {
    const user = await client.create({
      _type: 'user',
      email,
      password,
      name,
    });
    return user;
  } catch (error) {
    throw new Error('Sign up failed: ' + error.message);
  }
}
