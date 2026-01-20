import clsx from 'clsx';

const Button = ({ children, variant = 'primary', disabled, className, ...props }) => {
  const baseStyles = "px-6 py-2 rounded-xl font-semibold transition-all duration-300 shadow-lg border backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent active:scale-95";
  
  const variants = {
    primary: "bg-white/20 border-white/30 text-white hover:bg-white/30 hover:scale-105 hover:shadow-purple-500/20 focus:ring-purple-400",
    secondary: "bg-black/20 border-white/10 text-gray-200 hover:bg-black/40 focus:ring-gray-400",
    danger: "bg-red-500/20 border-red-500/50 text-red-100 hover:bg-red-500/40 focus:ring-red-500",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        disabled && "opacity-50 cursor-not-allowed hover:scale-100 hover:bg-inherit grayscale",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;