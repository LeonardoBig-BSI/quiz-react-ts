import type { ReactNode } from "react";

interface ButtonProps {
    type: 'button' | 'submit';
    className: string;
    onClick?: () => void;
    children: ReactNode;
}

const Button = ({ type, className, onClick, children }: ButtonProps) => {
  return (
    <button
        type={type}
        className={className}
        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button