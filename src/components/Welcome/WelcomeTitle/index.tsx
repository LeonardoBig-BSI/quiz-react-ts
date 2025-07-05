
interface WelcomeTitleProps {
    title: string;
}

const WelcomeTitle = ({ title }: WelcomeTitleProps) => {
  return (
    <h2 className="mb-4 text-lg md:text-2xl lg:text-2xl font-bold">
        {title}
    </h2>
  )
}

export default WelcomeTitle