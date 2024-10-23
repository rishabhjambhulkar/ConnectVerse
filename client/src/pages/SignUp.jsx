import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import React from 'react'; 
import axios from 'axios';
import PasswordInput from '../components/password';

export default function SignUp({ setIsAuthenticated }) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  console.log(formData)




  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
  
      const res = await axios.post('http://localhost:4000/api/auth/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = res.data;
      console.log(data);
      setLoading(false);
  
      if (data.success === false) {
        setError(true);
        return;
      }
  
      setIsAuthenticated(true);
      console.log(isAuthenticated);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };
  

  
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='Username'
          id='username'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        {/* <input
          type='password'
          placeholder='Password'
          id='password'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        /> */}
        <PasswordInput
          value={formData.password || ''}
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        {/* <OAuth /> */}

       
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
    </div>
  );
}