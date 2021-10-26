import React from "react";
import L from "leaflet";
import { GridLayer, withLeaflet } from "react-leaflet";
import SvgComp from "./SVGComp";
import ReactDOMServer from "react-dom/server";
import ReactDOM from "react-dom";

const svgData = [
  {
    id: 1,
    size: 10,
    dots: 4,
    pull: 4
  },
  {
    id: 2,
    size: 20,
    dots: 5,
    pull: 4
  },
  {
    id: 3,
    size: 15,
    dots: 6,
    pull: 3
  },
  {
    id: 4,
    size: 25,
    dots: 7,
    pull: 2
  }
];

const RenderCircles = () => {
  return svgData.map((svg) => (
    <SvgComp
      key={svg.id}
      size={svg.size}
      numberOfDots={svg.dots}
      pull={svg.pull}
      width={250}
      height={250}
    />
  ));
};

class Grid extends GridLayer {
  createLeafletElement() {
    const Grid = L.GridLayer.extend({
      createTile: () => {
        const tile = document.createElement("div");
        tile.innerHTML = ReactDOMServer.renderToString(<RenderCircles />);
        return tile;
        // tile.className = "marker";
        // tile.style.outline = "1px solid black";
        // return ReactDOM.render(
        // return (
        //   <SvgComp
        //     key={1}
        //     size={10}
        //     numberOfDots={2}
        //     pull={2}
        //     width={250}
        //     height={250}
        //   />
        // );
        //   tile
        // );
        // return
        // return tile;
      }
    });
    return new Grid();
  }
}

export default withLeaflet(Grid);
