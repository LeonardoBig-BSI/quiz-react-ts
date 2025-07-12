import type { ReactNode } from "react"

interface GameOverRootProps {
    children: ReactNode;
}

const GameOverRoot = ({ children }: GameOverRootProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
        {children}
    </div>
  )
}

export default GameOverRoot