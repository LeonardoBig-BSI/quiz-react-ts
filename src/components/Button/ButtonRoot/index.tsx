import type { ReactNode } from "react"

interface ButtonRootProps {
    children: ReactNode;
}

const ButtonRoot = ({ children }: ButtonRootProps) => {
  return (
    <button className='text-base lg:text-lg xl:text-xl px-8 py-4 rounded-xl  border-none cursor-pointer font-bold bg-[linear-gradient(90deg,rgba(132,53,222,1)_0%,rgba(184,84,232,1)_100%)]
                   hover:bg-[linear-gradient(90deg,rgba(184,84,232,1)_0%,rgba(132,53,222,1)_100%)]'
    >
        {children}
    </button>
  )
}

export default ButtonRoot