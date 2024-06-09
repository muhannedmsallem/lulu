"use client";

// Login.js

import { useState } from 'react';
import bcrypt from 'bcryptjs'; // Import bcrypt for hashing
import { client } from '../../sanity';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashedPassword = await hashPassword(formData.password); // Hash the password
    const user = {
      email: formData.email,
      password: hashedPassword // Send the hashed password for authentication
    };

    try {
      // Authenticate user against Sanity
      const response = await client.fetch('*[_type == "user" && email == $email][0]', user);

      if (response && await bcrypt.compare(formData.password, response.password)) { // Compare hashed passwords
        console.log('Login successful!');
        // Redirect to dashboard or perform any other action upon successful login
      } else {
        console.log('Invalid email or password');
        setErrors({ login: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrors({ login: 'An error occurred while logging in' });
    }
  };

  // Function to hash password using bcrypt
  const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`shadow appearance-none border ${errors.email ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={`shadow appearance-none border ${errors.password ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
        </div>
        {errors.login && <p className="text-red-500 text-xs italic">{errors.login}</p>}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
