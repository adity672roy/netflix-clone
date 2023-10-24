import React from "react";
import CartSlider from "./CardSlider";

const Slider = ({ movies }) => {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <div>
      <CartSlider title="Trending Now" data={getMoviesFromRange(0, 10)} />
      <CartSlider title="New Releases" data={getMoviesFromRange(10, 20)} />
      <CartSlider
        title="Blockbuster Movies"
        data={getMoviesFromRange(20, 30)}
      />
      <CartSlider
        title="Poplular On Netflix"
        data={getMoviesFromRange(30, 40)}
      />
      <CartSlider title="Action Movies" data={getMoviesFromRange(40, 50)} />
      <CartSlider title="Epics" data={getMoviesFromRange(50, 60)} />
    </div>
  );
};

export default React.memo(Slider);
