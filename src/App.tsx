import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";
import Background from "./components/Background";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

const image =
  "https://images.unsplash.com/photo-1555448248-2571daf6344b?w=1920&q=100";

function App() {
  return (
    <Background image={image}>
      <Title text="JSMonday Rocks" />
      <Subtitle text="Let's generate a beautiful image out of this React scene" />
    </Background>
  );
}

export default App;
