import "./flat-card.css";

const FlatCard = ({ children, className }) => {
  return (
    <div className="flatCard-main">
      <div className={className}> {children} </div>
    </div>
  );
};

export default FlatCard;
