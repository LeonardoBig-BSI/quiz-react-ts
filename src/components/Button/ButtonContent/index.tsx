
interface ButtonContentProps {
    text: string;
}

const ButtonContent = ({ text }:ButtonContentProps) => {
  return (
    <p className="text-base md:text-2xl lg:text-2xl text-zinc-100 font-bold">
        {text}
    </p>
  )
}

export default ButtonContent