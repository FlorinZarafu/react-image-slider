import React from "react";
import data from "./data/data";
import Card from "./Card";
import "./App.scss";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class App extends React.Component {
  state = {
    properties: data.properties,
    property: data.properties[0],
  };
  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex],
    });
  };
  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex],
    });
  };
  render() {
    const { properties, property } = this.state;
    return (
      <div>
        <button
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        >
          Prev
        </button>
        <button
          onClick={() => this.nextProperty()}
          disabled={property.index === data.properties.length - 1}
        >
          Next
        </button>
        <Card property={property} />
        {/* <div className="cards-slider">
          <div className="cards-slider-wrapper">
            {properties.map((property) => (
              <Card key={property.id} property={property} />
            ))}
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;
