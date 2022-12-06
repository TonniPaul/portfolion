import Bag from "../assets/bag.png";

const Loader = () => {
  if (document.readyState !== "complete") {
    return (
      <div
        className="loader"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        <img
          src={Bag}
          alt=""
          style={{
            animation: "360deg 2s infinite",
          }}
        />
      </div>
    );
  }
  return null;
};

export default Loader;
