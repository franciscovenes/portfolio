import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

export default function Fade({ show, children }) {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) {
      setRender(true);
    }
  }, [show]);

  const animationStyle = {
    animation: `${show ? "fadeIn" : "fadeOut"} 0.5s forwards `,
  };

  function onAnimationEnd() {
    if (!show) setRender(false);
  }

  return (
    render && (
      <div
        style={animationStyle}
        onAnimationEnd={onAnimationEnd}
        id="menu-container"
      >
        {children}
      </div>
    )
  );
}

Fade.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  setShow: PropTypes.func,
};
