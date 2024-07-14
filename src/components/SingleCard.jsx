import React from "react";
// import "./SingleCard.css";
const SingleCard = ({ card, handleCardClick, flipped, disabled }) => {
  const handleClick = () => {
    console.log(disabled)
    if (!disabled) {
      handleCardClick(card);
    }
  };
  return (
    <div className="card relative">
      <div className={flipped ? "flipped" : ""}>
        <img
          src={card.src}
          alt={card.src}
          className={`absolute ${
            flipped ? "scale-x-[-1]" : "scale-x-[0]"
          } block front md:w-36 md:h-36 sm:w-20 sm:h-20 w-16 h-16 bg-[#252a40] p-2 rounded-md border border-gray-300 transition `}
        />
        <img
          src="./images/pattern.jpg"
          alt="bg"
          className={`block back ${
            flipped ? "scale-x-[0]" : "scale-x-[-1]"
          }  md:w-36 md:h-36 sm:w-20 sm:h-20 w-16 h-16 rounded-md border border-gray-300  transition `}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
