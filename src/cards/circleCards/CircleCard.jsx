import "./circle-card.css";

const CircleCard = ({ skillImage }) => {
  return (
    <div className="circle-card-cont">
      <img src={skillImage} alt="" className="circle-img" />
    </div>
  );
};

export default CircleCard;
