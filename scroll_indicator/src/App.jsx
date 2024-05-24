import React from 'react'
import ScrollIndicator from './ScrollIndicator'

function App() {
	const urlLoad = "https://dummyjson.com/products";

  return (
    <ScrollIndicator url={urlLoad}/>
  )
}

export default App
