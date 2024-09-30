interface Props {
  header: string;
  num: number;
  description: string;
  colour: "orange" | "blue" | "pink";
}

const Card = ({ header, num, description, colour }: Props) => {
  const backgroundColor = {
    orange: "bg-orange-500/20",
    blue: "bg-blue-500/20",
    pink: "bg-pink-500/20",
  }[colour];

  const textColor = {
    orange: "text-orange-500",
    blue: "text-blue-500",
    pink: "text-pink-500",
  }[colour];

  return (
    <div className={`rounded-xl p-2 ${backgroundColor} lg:w-44 md:w-44 sm:w-full`}>
      <div className="flex flex-col justify-start">
        <p className="font-bold">{header}</p>
        <p className="text-5xl">{num}</p>
        <p className={textColor}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
