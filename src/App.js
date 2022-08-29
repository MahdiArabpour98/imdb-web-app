import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Header, Footer, MovieDetails, PageNoteFound } from './common/routes';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:imdbID' element={<MovieDetails />} />
          <Route path='*' element={<PageNoteFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
