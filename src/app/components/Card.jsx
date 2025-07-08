"use client";
const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-6 ${className} min-h-3/4
    
    `}>
      {children}
    </div>
  );
};

export default Card;
