import React, { useState, useEffect } from "react"
import ImageSlider from './Image Slider';


const url = "https://picsum.photos/v2/list";
const page = 1;
const imgLimit = 10;

function App() {
  return <ImageSlider url = {url} page = {page} limit = {imgLimit}/>
}

export default App
