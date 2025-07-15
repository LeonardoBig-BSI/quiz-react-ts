import type { ReactNode } from "react"

interface PickCategoryRootProps {
    children: ReactNode;
}

const PickCategoryRoot = ({ children }: PickCategoryRootProps) => {
  return (
    <div className="max-w-[500px] text-center">
        {children}
    </div>
  )
}

export default PickCategoryRoot