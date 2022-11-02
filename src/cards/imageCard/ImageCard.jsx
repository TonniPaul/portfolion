import "./ImageCard.css";

const ImageCard = ({ img, alt }) => {
  return (
    <div className="card-image-div">
      <img src={img} alt={alt} className="card-img" />
    </div>
  );
};

export default ImageCard;
