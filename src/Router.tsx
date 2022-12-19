import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './pages/About';
import Details from './pages/Details';
import Layout from './pages/Layout';
import List from './pages/List';
import NotFound from './pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path="about" element={<About />} />
          <Route path="rating_system/:ratingSystem" element={<Details />} />

          {/* Using path="*"" means "match anything", so this route
                      acts like a catch-all for URLs that we don't have explicit
                      routes for. */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
