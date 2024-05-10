import React, {useState, useEffect} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Nasa from './components/Nasa';
import nasaImage from './model/data';

// Define a functional component named App
function App() {
  const [nasa, setNasa] = useState(nasaImage);
  const [index, setIndex] = useState(0);

// Set up an auto play using useEffect
  useEffect(() => {
     const lastIndex = nasaImage.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex){
      setIndex(0)
    }
  // Dependencies for the useEffect hook
  }, [index, setNasa])

  useEffect(() => {
    let slider = setInterval(() => {
      console.log(nasa);
      setIndex(index + 1)
    }, 7000);
    return () => clearInterval(slider)
  }, [index])


// Returning the JSX code for the App component
  return (
  <section className="container">
  <div className="title">
  <h2> NASA: James Webb Space Telescope Image
  </h2>
  <div className="underline"></div>
  </div>
  <div className="container-center">

  {nasaImage.map((james, jamesIndex) => {
        return <Nasa key={james.id} {...james} jamesIndex={jamesIndex} index={index} />
  })}

  <button className="prev" onClick={() => setIndex(index - 1)}>
    <FiChevronLeft />
  </button>

  <button className="next" onClick={() => setIndex(index + 1)}>
    <FiChevronRight />
  </button>
  
  </div>
  </section> 
  );
}

export default App;
