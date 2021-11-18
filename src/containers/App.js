import {useState,useEffect} from 'react'
import './App.css';

import ImageContainer from '../components/ImageContainer/ImageContainer';




const App=()=> {
 const [images,setImages]=useState([])
 const [count,setCount]= useState(0)

  useEffect(()=>{
    const url=`https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`
    const getImages= async()=>{
      const response= await fetch(url)
      const data = await response.json();
      setImages(data.meals)
    }
    getImages();
  },[]) 


  const handleIncrement=()=>{
    console.log("hello")
    setCount(count+1)
  }

  return (
    <div className="App">
     <h1>Image Voting App</h1>
     <ImageContainer images={ images} count={count} handleIncrement={handleIncrement}/>
    </div>
  );
}

export default App;
