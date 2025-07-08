const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseStyles =
    "px-6 py-3 rounded-md font-semibold transition duration-300 ease-in-out";
  const variants = {
    primary: "bg-blue-700 text-white  hover:bg-blue-900 ",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      type={type}
      disabled={false}>
      {children}
    </button>
  );
};

export default Button;
