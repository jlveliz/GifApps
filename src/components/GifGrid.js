//useEffect te permite ejecutar codigo de manera condicional
import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

function GifGrid({ category }) {
  // const [images, setImages] = useState([]);
  const {data: images, loading} = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__bounce animate__delay-2s">{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
