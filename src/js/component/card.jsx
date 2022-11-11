import React from "react";
import PropTypes from "prop-types";

const Card = ({nombre, img, cientifico}) => {
  return (
    <div className="card" style={{"width": "18rem"}}>
      <img src={img} className="card-img-top" style={{"height":"200px"}} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">
          {cientifico}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

Card.protoType = {
    nombre: PropTypes.string,
    img: PropTypes.string,
    cientifico: PropTypes.string
};

export default Card;
