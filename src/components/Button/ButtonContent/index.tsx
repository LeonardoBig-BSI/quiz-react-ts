
interface ButtonContentProps {
    text: string;
    className: string;
}

const ButtonContent = ({ text, className }:ButtonContentProps) => {
  return (
    <p className={className}>
        {text}
    </p>
  )
}

export default ButtonContent