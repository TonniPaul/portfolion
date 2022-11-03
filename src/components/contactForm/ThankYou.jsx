import FlatCard from "../../cards/flatcard/FlatCard";
import myLinks from "../../Object Files/links";

const ThankYou = () => {
  return (
    <FlatCard className="thank-you">
      <div className="thank-you-home">
        <h1> Your message is greatly appreciated!</h1>
        <p className="thank-you-desc">
          TonniPaul typically responds within 24 hours. Please make sure you
          input a valid email address.
        </p>
        <div className="connect">
          <div className="connect-text"> Connect with me on my socials:</div>
          <div className="flex project-links-cont">
            {myLinks.map((items) => {
              return (
                <a
                  key={items.id}
                  href={items.links}
                  className="project-links contact-links"
                >
                  <i className={items.icons}></i>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </FlatCard>
  );
};

export default ThankYou;
