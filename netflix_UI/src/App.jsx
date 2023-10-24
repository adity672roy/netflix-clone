import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";
import Player from "./pages/Player";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import UserLiked from "./pages/UserLiked";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Netflix />} />
        <Route path="player" element={<Player />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TVShows />} />
        <Route path="/mylist" element={<UserLiked />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
