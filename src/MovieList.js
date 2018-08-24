import React from "react";

import Movie from "./Movie";

export default ({ data, filter, star, favourites, addFavourite }) => {
  const input = filter.toLowerCase();

  const movies = data
    .filter((movie, i) => {
      return (
        favourites.indexOf(movie.id) === -1 &&
        !movie.title.toLowerCase().indexOf(input)
      );
    })
    .filter((movie, i) => {
      return movie.rating >= star;
    })

    .map((movie, i) => {
      return (
        <Movie
          id={movie.id}
          key={i}
          info={movie}
          handleFavourite={id => addFavourite(id)}
        />
      );
    });

  return <ul> {movies} </ul>;
};
