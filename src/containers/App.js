import {useState,useEffect} from 'react'
import './App.css';

import ImageContainer from '../components/ImageContainer/ImageContainer';

const API_KEY = process.env.REACT_APP_API_KEY;



const App=()=> {
 const [images,setImages]=useState([])

  useEffect(()=>{
    const url=`https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo`
    const getImages= async()=>{
      const response= await fetch(url)
      const data = await response.json();
      setImages(data.hits)
    }
    getImages();
  },[])

  return (
    <div className="App">
     <h1>Image Voting App</h1>
     <ImageContainer images={images}/>
    </div>
  );
}

export default App;
