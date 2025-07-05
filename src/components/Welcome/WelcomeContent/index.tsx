import type { ReactNode } from "react"

interface WelcomeContentProps {
    children: ReactNode
}

const WelcomeContent = ({ children }: WelcomeContentProps) => {
  return (<> {children} </>)
}

export default WelcomeContent