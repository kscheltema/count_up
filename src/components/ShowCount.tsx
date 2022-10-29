import DateTimeDisplay from "./DateTimeDisplay";

interface OwnProps {
  days: string;
  hours: string;
  min: string;
  sec: string;
}

const ShowCount: React.FC<OwnProps> = ({ days, hours, min, sec }) => {
  return (
    <div>
      <DateTimeDisplay value={days} type={"Days"} />
    </div>
  );
};

export default ShowCount;
