import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { Navbar, Feed, SearchFeed } from "./components";
export const DivStyle = styled.div`
  background-color: #000;
`;

const App = () => (
  <BrowserRouter>
    <DivStyle>
      <Navbar />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </DivStyle>
  </BrowserRouter>
);

export default App;
