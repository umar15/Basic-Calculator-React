import React from "react";
function Button({ bg, bold = "normal", color = "#000000", title, onClick }) {
  return (
    <div
      className="btn"
      onClick={onClick}
      style={{
        background: bg ? bg : "#c6e6e6",
        color: color,
        fontWeight: bold,
      }}
    >
      {title}
    </div>
  );
}
export default Button;
