import React from "react";
import axios from "axios";
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    try {
      const data = await axios.get("https://yts-proxy.now.sh/list_movies.json");
      console.log(data.data.data.movies);
      this.setState({ movies: data.data.data.movies, isLoading: false });
    } catch (error) {
      console.log("Error fetching movies:", error);
    }
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        <h1>{isLoading ? "Loading..." : ""}</h1>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={movie.medium_cover_image} alt={movie.title} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
