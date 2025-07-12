import type { ReactNode } from "react"

interface ButtonRootProps {
  className?: string;
    onClick?: () => void
    children: ReactNode;
}

const ButtonRoot = ({ className, onClick, children }: ButtonRootProps) => {
  return (
    <button
      onClick={onClick}
      className={className}
    >
        {children}
    </button>
  )
}

export default ButtonRoot