import React from 'react'
import Board from '../components/Board'

const Main = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
        <h1 className='text-4xl font-bold'>Memory Game</h1>
        

        <Board/>
    </div>
  )
}

export default Main