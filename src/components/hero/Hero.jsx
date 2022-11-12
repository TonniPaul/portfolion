import "./hero.css";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <section id="home">
      <div className="hero-main-cont">
        <div className="hero-flex">
          <div className="hero-sub-cont-1">
            <h1 className="hero-main-text alt-text"> Hello,</h1>
            <h1 className="hero-main-text"> I am TonniPaul </h1>
            <p className="alt-text what_am_i"> A Frontend Developer</p>
            <p className="hero-subtext">
              <span className="head-span-text">{"<>"}</span>
              How can I be of help ?
              <span className="head-span-text">{"</>"} </span>
            </p>
            <div className="btn-div">
              <a href="#about" className="btn">
                Explore More
              </a>
              <a
                href="https://1drv.ms/b/s!AqOoOpxoiQY4gRrIPX5ofiVuX5RY?e=n5e2Pl"
                target="blank"
                className="btn"
              >
                Download CV
                <i className="fa-solid fa-download"></i>
              </a>
            </div>
          </div>
          <div className="hero-sub-cont">
            <img src={hero} alt="hero img" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
