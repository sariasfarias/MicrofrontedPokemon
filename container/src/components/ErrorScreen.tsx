import React from 'react';
import './PokedexScreen.scss';

export function ErrorScreen(){
  return (
    <div className='pokemon-screen'>
      <img
        width={320} height={320}
        src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cca24f61-7d2f-41f9-b1aa-bdbc9088062f/da952xj-eff4a5e2-bb0f-417c-bdd8-267e646b06e7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NjYTI0ZjYxLTdkMmYtNDFmOS1iMWFhLWJkYmM5MDg4MDYyZlwvZGE5NTJ4ai1lZmY0YTVlMi1iYjBmLTQxN2MtYmRkOC0yNjdlNjQ2YjA2ZTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2zgTSWkkeougnaSCAkfQJxiF6ziYsnCxZArN07DKJHA'}
        alt={'Technical problems'}
      />
    </div>
  )
}
