import React from 'react';

export default function MelodyVerse() {
  return (
    <div className='px-4 py-12 max-w-3xl mx-auto'>
      <h1 className='text-4xl font-bold mb-6 text-slate-800 text-center'>
        Welcome to Melody Verse!
      </h1>
      
      <div className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2 text-slate-700'>Now Playing</h2>
        <div className='flex items-center bg-slate-100 p-4 rounded-md shadow-md'>
          <img
            src='https://via.placeholder.com/150' // Placeholder image for album cover
            alt='Album Cover'
            className='w-24 h-24 rounded-md mr-4'
          />
          <div>
            <h3 className='text-xl font-bold text-slate-800'>Song Title</h3>
            <p className='text-slate-600'>Artist Name</p>
          </div>
        </div>
      </div>

      <div className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2 text-slate-700'>Top Songs</h2>
        <ul className='space-y-2'>
          {[...Array(5)].map((_, index) => (
            <li key={index} className='flex justify-between items-center bg-slate-100 p-3 rounded-md shadow-md'>
              <div>
                <h3 className='font-bold text-slate-800'>Song Title {index + 1}</h3>
                <p className='text-slate-600'>Artist Name {index + 1}</p>
              </div>
              <button className='text-slate-600 hover:text-slate-800'>
                Play
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className='text-2xl font-semibold mb-2 text-slate-700'>Playlists</h2>
        <div className='grid grid-cols-2 gap-4'>
          {[...Array(4)].map((_, index) => (
            <div key={index} className='bg-slate-100 p-4 rounded-md shadow-md'>
              <h3 className='font-bold text-slate-800'>Playlist Title {index + 1}</h3>
              <p className='text-slate-600'>Description of Playlist {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
