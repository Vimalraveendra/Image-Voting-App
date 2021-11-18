import {useState,useEffect} from 'react'
import './App.css';

import ImageContainer from '../components/ImageContainer/ImageContainer';




const App=()=> {
 const [images,setImages]=useState([])


  useEffect(()=>{
    const url=`https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`
    const getImages= async()=>{
      const response= await fetch(url)
      const data = await response.json();
      setImages(data.meals)
    }
    getImages();
  },[]) 


 

  return (
    <div className="App">
     <h1>Image Voting App</h1>
     <ImageContainer images={ images}/>
    </div>
  );
}

export default App;
