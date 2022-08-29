import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../redux/movies/moviesSlice";
import { MovieListing } from "../../common/routes"
import "./Home.scss";


const Home = () => {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movies.loading)

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch])

  return (
    <>
      {
        loading ? (
          <div className="loading"> loading...</div >
        ) : (
          <div className="banner-img">
            <MovieListing />
          </div>
        )
      }
    </>
  )
}

export default Home