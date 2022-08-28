import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies } from "../../redux/movies/moviesSlice";
import "./Home.scss";


const Home = () => {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movies.loading)

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch])

  useEffect(() => {
    console.log('movieState', loading)
  }, [loading])

  return (
    <>
      {
        loading ? (
          <div> loading.....................</div >
        ) : (
          <div>Home</div>
        )
      }
    </>
  )
}

export default Home