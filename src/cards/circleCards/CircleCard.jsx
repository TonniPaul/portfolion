import "./circle-card.css";

const CircleCard = ({ skillImage, logo_text, logo }) => {
  return (
    <div className="circle">
      <div className=" flex column circle-card-cont">
        <img src={skillImage} alt={logo} className="circle-img" />
      </div>
      <p className="logo_name">{logo_text}</p>
    </div>
  );
};

export default CircleCard;
