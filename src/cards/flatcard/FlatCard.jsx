import "./flat-card.css";

const FlatCard = ({ children, className, customClass }) => {
  const classes = `flatCard-main  ${className} `;
  return (
    <div className={classes}>
      <div className={customClass}> {children} </div>
    </div>
  );
};

export default FlatCard;
