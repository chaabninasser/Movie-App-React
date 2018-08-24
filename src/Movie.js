import React from "react";

import Rating from "./Rating";
const Stars = props => {
  let shitVect = [];
  for (let i = 0; i < props.rate; i++) {
    shitVect.push(<span>☆</span>);
  }
  return (
    <tr>
      <td>{shitVect}</td>
    </tr>
  );
};

export default ({ id, info, handleFavourite }) => (
  <li className={info.typemovie} onClick={() => handleFavourite(id)}>
    {info.title} <img src={info.img} />
    <Stars rate={info.rating} />
  </li>
);
