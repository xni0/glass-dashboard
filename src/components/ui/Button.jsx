import clsx from 'clsx';

const Button = ({ children, variant = 'primary', disabled, className, ...props }) => {
  // Ahora rounded-glass-btn aplicará 12px (igual que los inputs)
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 font-medium text-sm transition-all duration-300 rounded-glass-btn border backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent active:scale-95";
  
  const variants = {
    primary: [
      "bg-bg-black-20 border-white/10 text-text-white",
      // Hover con sombra inferior definida
      "hover:bg-bg-black-30 hover:border-purple/30 hover:shadow-purple-glow hover:-translate-y-0.5",
      "focus:ring-purple focus:border-purple"
    ],
    
    secondary: [
      "bg-transparent border-border-gray text-text-white",
      "hover:bg-black hover:border-white",
      "focus:ring-white focus:border-white"
    ],
    
    danger: [
      "bg-bg-red-500-default border-bg-red-500-border text-bg-red-500-font-red",
      "hover:bg-red-500/20 hover:border-red-400 hover:text-red-200 hover:shadow-[0_10px_20px_-5px_rgba(246,56,56,0.4)]",
      "focus:ring-red-500/70 focus:border-red-500"
    ],
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        disabled && "opacity-40 cursor-not-allowed pointer-events-none grayscale shadow-none hover:shadow-none hover:translate-y-0",
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