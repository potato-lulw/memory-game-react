import React from "react";

const SingleCard = ({ card, handleCardClick }) => {

    const handleClick = () => {
        handleCardClick(card);
    }
  return (
    <div  className="">
      <img
        src={card.src}
        alt={card.src}
        className=" md:w-36 md:h-36 sm:w-12 sm:h-12 w-8 h-8 bg-[#252a40] p-2 rounded-md border border-gray-300"
      />
      <img
        src="./images/pattern.jpg"
        alt="bg"
        className="md:w-36 md:h-36 sm:w-12 sm:h-12 w-8 h-8 rounded-md border border-gray-300"
        onClick={handleClick}
      />
    </div>
  );
};

export default SingleCard;
