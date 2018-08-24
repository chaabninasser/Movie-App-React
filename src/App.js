import React, { Component } from "react";

import Search from "./Search";
import FavouritesList from "./FavouritesList";
import MovieList from "./MovieList";
import Rating from "./Rating";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      favourites: [],
      rating: 0
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    });
  }

  addFavourite(id) {
    const newSet = this.state.favourites.concat([id]);
    this.setState({
      favourites: newSet
    });
  }

  deleteFavourite(id) {
    const { favourites } = this.state;
    const newList = [...favourites.slice(0, id), ...favourites.slice(id + 1)];
    this.setState({
      favourites: newList
    });
  }
  handleChange = rate => {
    this.setState({ rating: rate });
  };

  render() {
    const hasSearch = this.state.filterText.length > 0;
    return (
      <div>
        <header>
          <div className="navbar">
            <Search filterUpdate={this.filterUpdate.bind(this)} />
            <Rating onchange={this.handleChange} />
          </div>
        </header>

        <main>
          <FavouritesList
            data={this.props.data}
            favourites={this.state.favourites}
            deleteFavourite={this.deleteFavourite.bind(this)}
          />
          <MovieList
            data={this.props.data}
            filter={this.state.filterText}
            star={this.state.rating}
            favourites={this.state.favourites}
            addFavourite={this.addFavourite.bind(this)}
          />

          <div className="footer">
            Source of Movies list: <a href="#"> Top Movies Films </a>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
