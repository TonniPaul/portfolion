import FlatCard from "../../cards/flatcard/FlatCard";
import myLinks from "../../Object Files/links";

const ThankYou = () => {
  return (
    <FlatCard className="thank-you">
      <div className="thank-you-home">
        <h1> Your message is greatly appreciated!</h1>
        <p className="thank-you-desc">
          Typically, TonniPaul responds in 24 hours. Please ensure that your
          email address is correct; if not, refresh the page and resubmit.
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
                  target=" blank"
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
