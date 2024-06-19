import React from "react";
// import "./SingleCard.css";
const SingleCard = ({ card, handleCardClick, flipped }) => {
  const handleClick = () => {
    handleCardClick(card);
  };
  return (
    <div className="card relative">
      <div className={flipped ? "flipped" : ""}>
        <img
          src={card.src}
          alt={card.src}
          className={`absolute ${flipped ? "scale-x-[-1]": "scale-x-[0]"} block front md:w-36 md:h-36 sm:w-12 sm:h-12 w-8 h-8 bg-[#252a40] p-2 rounded-md border border-gray-300 transition`}
        />
        <img
          src="./images/pattern.jpg"
          alt="bg"
          className={`block back md:w-36 md:h-36 sm:w-12 sm:h-12 w-8 h-8 rounded-md border border-gray-300  transition `}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
