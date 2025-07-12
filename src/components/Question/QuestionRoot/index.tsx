import type { ReactNode } from "react"

interface QuestionRootProps {
    children: ReactNode;
}

const QuestionRoot = ({ children }: QuestionRootProps) => {
  return (
    <div className="text-center max-w-[300px] md:max-w-[500px] bg-colorBackground rounded-md p-8">
        {children}
    </div>
  )
}

export default QuestionRoot