import React from "react";

function GifGridItem({ title, url }) {
  return (
    <div className="card animate__animated animate__fadeIn animate__delay-2s">
      <img src={url} title={title} alt={title} /><p>{title}</p>
    </div>
  );
}

export default GifGridItem;
