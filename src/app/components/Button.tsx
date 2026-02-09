import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "gold";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  type = "button",
  disabled = false
}: ButtonProps) {
  const baseStyles = "rounded-full transition-all inline-flex items-center justify-center";

  const variants = {
    primary: "bg-gradient-to-r from-[var(--maroon)] to-[var(--royal-blue)] text-white hover:shadow-lg",
    secondary: "bg-[var(--royal-blue)] text-white hover:bg-[var(--royal-blue)]/90 hover:shadow-lg",
    outline: "border-2 border-[var(--maroon)] text-[var(--maroon)] hover:bg-[var(--maroon)] hover:text-white",
    gold: "bg-[var(--gold)] text-[var(--charcoal)] hover:bg-[var(--gold)]/90 hover:shadow-lg"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      {children}
    </motion.button>
  );
}
