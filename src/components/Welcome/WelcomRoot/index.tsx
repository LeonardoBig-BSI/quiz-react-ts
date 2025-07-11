import type { ReactNode } from "react";

interface WelcomeRootProps {
    children: ReactNode;
}

const WelcomeRoot = ({ children }: WelcomeRootProps) => {
  

  return (
    <div className="className='max-w-[500px] text-center">
        {children}
    </div>
  )
}

export default WelcomeRoot