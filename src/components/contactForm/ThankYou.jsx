import myLinks from '../../data/links';

import FlatCard from '../../cards/flatcard/FlatCard';
import SvgIcon from '../svg-icon/svg-icon';

const ThankYou = () => {
  return (
    <div className="thank_you_main">
      <FlatCard className="xxx" customClass="thank-you ">
        <div className="thank-you-home">
          <h1> Your message is greatly appreciated!</h1>
          <p className="thank-you-desc">
            Typically, TonniPaul responds within 24 hours. Please ensure that
            your email address is correct; if not, refresh the page and
            resubmit.
          </p>
          <div className="connect">
            <div className="connect-text"> Connect with me on my socials:</div>
            <div className="flex project-links-cont left__align">
              {myLinks.map((items) => {
                return (
                  <a
                    key={items.id}
                    href={items.links}
                    className="project-links contact-links thankyou_link"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SvgIcon name={items.icon} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="thankyou__img__cont">
          <img src="/assets/good.png" alt="3d thumb" className="thankyou_img" />
        </div>
      </FlatCard>
    </div>
  );
};

export default ThankYou;
