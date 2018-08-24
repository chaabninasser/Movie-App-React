import React from "react";

import Movie from "./Movie";

export default ({ favourites, data, deleteFavourite }) => {
  const hasFavourites = favourites.length > 0;
  const favList = favourites.map((fav, i) => {
    return (
      <Movie
        id={i}
        key={i}
        info={data[fav]}
        handleFavourite={id => deleteFavourite(id)}
      />
    );
  });
  return (
    <div className="favourites">
      <h4>
        {hasFavourites
          ? "Your FavouritesList"
          : "Click on a movie to favouriteslist it.."}
      </h4>
      <ul>{favList}</ul>
      {hasFavourites && <hr />}
    </div>
  );
};
