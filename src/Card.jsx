import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Card = ({ property }) => {
  const {
    index,
    picture,
    city,
    address,
    bedrooms,
    bathrooms,
    carSpaces,
  } = property;
  return (
    <div id={`card-${index}`} className="card">
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={1500}
        transitionLeaveTimeout={1500}
        transitionAppear={true}
        transitionAppearTimeout={1500}
      >
        <img src={picture} alt={city} />
        <div className="detailes">
          <span className="index">{index + 1}</span>
          <p className="location">
            {city}
            <br />
            {address}
          </p>
          <ul className="features">
            <li className="icon-bed">
              {bedrooms}
              <span>bedrooms</span>
            </li>
            <li className="icon-bath">
              {bathrooms}
              <span>bathrooms</span>
            </li>
            <li className="icon-car">
              {carSpaces}
              <span>parking spots</span>
            </li>
          </ul>
        </div>
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default Card;
