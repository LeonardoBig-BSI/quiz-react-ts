import type { ReactNode } from "react"

interface OptionAnswerRootProps {
    children: ReactNode;
}

const OptionAnswerRoot = ({ children }: OptionAnswerRootProps) => {
    return(
        <>{children}</>
    )
}

export default OptionAnswerRoot;