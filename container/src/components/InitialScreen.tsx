import React from 'react';
import './PokedexScreen.scss';

export function InitialScreen(){
  return (
    <div className='pokemon-screen'>
      <img
        width={380} height={300}
        src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f82cc357-e354-4ef7-8b2d-647f6f756800/dbf1jrd-095f7fd1-e33b-4e26-b456-8cbf40d0e5d1.png/v1/fill/w_1024,h_765,q_80,strp/quien_es_ese_pokemon__who_s_that_poke___by_shikomt_by_shikomt_dbf1jrd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY1IiwicGF0aCI6IlwvZlwvZjgyY2MzNTctZTM1NC00ZWY3LThiMmQtNjQ3ZjZmNzU2ODAwXC9kYmYxanJkLTA5NWY3ZmQxLWUzM2ItNGUyNi1iNDU2LThjYmY0MGQwZTVkMS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.YZOIomNz5t-pjv59EuK-mtru0QgjhlTtGEGPLuzR1hM'}
        alt={'Technical problems'}
      />
    </div>
  )
}