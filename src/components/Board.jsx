import React, { useState } from 'react'

const fruits = [
    {"src": "./images/apple.png", "matched": false},
    {"src": "./images/banana.png", "matched": false},
    {"src": "./images/lychee.png", "matched": false},
    {"src": "./images/mango.png", "matched": false},
    {"src": "./images/watermelon.png", "matched": false},
    {"src": "./images/orange.png", "matched": false},
]

const Board = () => {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0);
    const shuffleFruits = () => {
        const shuffledFruits = [...fruits, ...fruits]
            .sort(() => Math.random() - 0.5)
            .map((fruit) => ({...fruit, id: Math.random()}) )
        return shuffledFruits;
    }

    const handleNewGameClick = () => {
        const shuffledFruits = shuffleFruits();
        setCards(shuffledFruits);
        setTurns(0);
        console.log(shuffledFruits, turns);
    }

   
  return (
    <div className='flex flex-col items-center justify-center'>
        <button onClick={handleNewGameClick} className='px-2 py-1 bg-red-500 rounded-md w-fit my-6 font-semibold'>New Game</button>
            <div className='grid grid-flow-row grid-cols-4 gap-4 my-2'>
                {
                    cards.map((card) => {
                        return (
                            <div key={card.id} className='bg-[#252a40] p-2 rounded-md border border-gray-'>
                                <img src={card.src} alt={card.src} className=' md:w-36 md:h-36 sm:w-12 sm:h-12 w-8 h-8' />
                                
                            </div>
                        )
                    })
                }
                
            </div>
        <p className='text-lg'>Turns - {turns}</p>   
    </div>
  )
}

export default Board