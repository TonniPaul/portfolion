import './ImageCard.css';

interface IImageCardProps {
  img: string;
  alt: string;
}

const ImageCard = ({ img, alt }: IImageCardProps) => {
  return (
    <div className="card-image-div">
      <img src={img} alt={alt} className="card-img" />
    </div>
  );
};

export default ImageCard;
