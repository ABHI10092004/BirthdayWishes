import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DreamyButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const DreamyButton = ({
  className,
  variant = "primary",
  size = "md",
  children,
  onClick,
  disabled,
}: DreamyButtonProps) => {
  const variants = {
    primary: "bg-gradient-to-r from-pink-deep to-rose text-primary-foreground shadow-button hover:shadow-glow",
    secondary: "bg-secondary text-secondary-foreground shadow-soft hover:bg-lavender",
    ghost: "bg-transparent text-foreground hover:bg-accent/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      className={cn(
        "relative font-poppins font-medium rounded-2xl transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default DreamyButton;
