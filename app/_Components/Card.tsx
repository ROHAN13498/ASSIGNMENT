
interface Props {
  header: string;
  num: number;
  description: string;
  colour: "orange" | "blue" | "pink";
}

const Card = ({ header, num, description, colour }: Props) => {
  const backgroundColor=`bg-${colour}-500/20`;
  const textColor=`text-${colour}-500`

  return (
    <div className={`rounded-xl p-2 ${backgroundColor} lg:w-44 md:w-44 sm:w-full`}>
      <div className='flex flex-col justify-start'>
        <p className='font-bold'>{header}</p>
        <p className='text-5xl'>{num}</p>
        <p className={textColor}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
