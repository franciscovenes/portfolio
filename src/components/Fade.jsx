import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

export default function Fade({ show, setShow, children }) {
  const [render, setRender] = useState(show);

  const mobileRef = useRef();

  useEffect(() => {
    if (show) {
      setRender(true);
    }
  }, [show]);

  useEffect(() => {
    if (render) {
      mobileRef.current.focus();
    }
  }, [render]);

  const animationStyle = {
    animation: `${show ? "fadeIn" : "fadeOut"} 0.8s forwards `,
  };

  function onAnimationEnd() {
    if (!show) setRender(false);
  }
  return (
    render && (
      <div
        style={animationStyle}
        ref={mobileRef}
        onBlur={() => setShow(false)}
        tabIndex="0"
        onAnimationEnd={onAnimationEnd}
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
