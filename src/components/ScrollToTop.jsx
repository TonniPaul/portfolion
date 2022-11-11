import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  // ====== Scroll Button Styling ======
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  // ==========Scroll Button Styling End ======
  return (
    <div className="scroll_to_top">
      {visible && <FaArrowCircleUp onClick={scrollToTop} />}
    </div>
  );
};

export default ScrollToTop;
