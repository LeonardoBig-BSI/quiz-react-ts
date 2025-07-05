
interface WelcomeTextProps {
    text: string;
}

const WelcomeText = ({ text }: WelcomeTextProps) => {
  return (
    <p className="mb-4 text-colorText">
        {text}
    </p>
  )
}

export default WelcomeText