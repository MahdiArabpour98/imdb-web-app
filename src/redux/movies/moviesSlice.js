import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "harry";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
    return response.data;
  }
)

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
  loading: false
};

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      // console.log('pending');
      return { ...state, loading: true }
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      // console.log("Fetched Successfully!", payload);
      return { ...state, loading: false, movies: payload };
    },
    [fetchAsyncMovies.rejected]: (state) => {
      // console.log("Rejected!");
      return { ...state, loading: false };
    }
  }
})

export default movieSlice.reducer;
