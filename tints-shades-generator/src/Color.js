import React, { useState, useEffect } from "react";

const Color = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  hex = "#" + hex;

  useEffect(() => {
    const timeout = setTimeout(() => setAlert(false), 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default Color;
